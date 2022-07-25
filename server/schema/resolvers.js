const { AuthenticationError } = require("apollo-server-express");
const { Developer, Recruiter, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    developers: async () => {
      return Developer.find().populate("projects");
    },
    developer: async (parent, { email }) => {
      return Developer.findOne({ email }).populate("projects");
    },
    recruiters: async () => {
      return Recruiter.find();
    },
    recruiter: async (parent, { email }) => {
      return Recruiter.findOne({ email });
    },
    projects: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Project.find(params);
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
    meDev: async (parent, args, context) => {
      if (context.user) {
        return Developer.findOne({ _id: context.user._id }).populate(
          "projects"
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addDev: async (parent, args) => {
      const developer = await Developer.create(args);
      const token = signToken(developer);
      return { token, developer, role: "Developer" };
    },
    addDevInfo: async (
      parent,
      { name, job_status, position, bio },
      context
    ) => {
      if (context.user) {
        return await Developer.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              name: name,
              job_status: job_status,
              position: position,
              bio: bio,
            },
          },
          {
            new: true,
          }
        );
      } else {
        throw new AuthenticationError("You need to be logged in.");
      }
    },
    addRecruiter: async (parent, args) => {
      const recruiter = await Recruiter.create(args);
      const token = signToken(recruiter);
      return { token, recruiter, role: "Recruiter" };
    },
    recLogin: async (parent, { email, password }) => {
      const user = await Recruiter.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);

      return { token, user, role: "Recruiter" };
    },
    devLogin: async (parent, { email, password }) => {
      const user = await Developer.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);

      return { token, user, role: "Developer" };
    },
    addProject: async (parent, { name, description, image, tech }, context) => {
      if (context.user) {
        const project = await Project.create({
          name,
          description,
          image,
          tech,
        });

        await Developer.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: project._id } },
          { new: true }
        );
        return project;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    addTech: async (parent, { projectId, name }, context) => {
      if (context.user) {
        return Project.findOneAndUpdate(
          { _id: projectId },
          {
            $addToSet: {
              tech: { name },
            },
          },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    removeProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
        });

        await Developer.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: { projects: project._id },
          }
        );

        return project;
      }
    },
    removeTech: async (parent, { projectId, techId }, context) => {
      if (context.user) {
        return Project.findOneAndUpdate(
          {
            _id: projectId,
          },
          {
            $pull: {
              tech: {
                _id: techId,
              },
            },
          },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in.");
    },
  },
};

module.exports = resolvers;
