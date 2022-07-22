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
  },

  Mutation: {
    addDev: async (parent, args) => {
      const developer = await Developer.create(args);
      const token = signToken(developer);
      return { token, developer, role: "Developer" };
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
      if (context.developer) {
        const project = await Project.create({
          name,
          description,
          image,
          tech,
        });

        await Developer.findOneAndUpdate(
          { _id: context.developer._id },
          { $addtoSet: { projects: project._id } }
        );
        return project;
      }
      throw new Authenticationerror("You need to be logged in.");
    },
    addTech: async (parent, { projectId, name }, context) => {
      if (context.developer) {
        return Project.findOneAndUpdate(
          { _id: projectId },
          {
            $addtoSet: {
              tech: { name },
            },
          },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    removeProject: async (parent, { projectId }, context) => {
      if (context.developer) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
        });

        await Developer.findOneAndUpdate(
          {
            _id: context.developer._id,
          },
          {
            $pull: { projects: project._id },
          }
        );

        return project;
      }
    },
    removeTech: async (parent, { projectId, techId }, context) => {
      if (context.developer) {
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
