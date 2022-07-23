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
  }

  type Auth {
    token: ID!
    role: String!
  }

  type Mutation {
    addDev(name: String!, email: String!, password: String!): Auth
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
