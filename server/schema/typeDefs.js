const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Developer {
    _id: ID!
    name: String!
    email: String!
    password: String!
    job_status: String
    position: String
    projects: [Project]
    bio: String
  }

  type Recruiter {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Tech {
    _id: ID!
    name: String!
  }

  type Project {
    _id: ID!
    name: String!
    description: String!
    image: String!
    tech: [Tech]!
  }

  type Query {
    developers: [Developer]
    developer(email: String!): Developer
    recruiters: [Recruiter]
    recruiter(email: String!): Recruiter
    tech: [Tech]
    projects: [Project]
    project(projectId: ID!): Project
    meDev: Developer
  }

  type Auth {
    token: ID!
    role: String!
  }

  type Mutation {
    addDev(name: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
=======
    addDevInfo(
      name: String!
      job_status: String!
      position: String!
      bio: String!
    ): Developer
>>>>>>> 0d4bd3abab444d080d4c4845ef8e1493566c1b85
    addRecruiter(name: String!, email: String!, password: String!): Auth
    recLogin(email: String!, password: String!): Auth
    devLogin(email: String!, password: String!): Auth
    addProject(name: String!, description: String!, image: String!): Project
    addTech(name: String!, projectId: ID!): Project
    removeProject(projectId: ID!): Project
    removeTech(projectId: ID!, techId: ID!): Project
  }
`;

module.exports = typeDefs;
