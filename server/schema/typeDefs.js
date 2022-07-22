const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    isRecruiter: Boolean!
  }

  type Tech {
    _id: ID
    name: String!
  }

  type Project {
    _id: ID
    name: String!
    description: String!
    image: String!
    tech: [Tech]!
  }

  type Query {
    users: [User]
    tech: [Tech]
    project: [Project]
  }  

  type Auth {
    token: ID
    user: User
  }

  type Mutations {
    addUser(name: String!, email: String!, password: String!, isRecruiter: Boolean!):Auth
    login(email: String!, password: String!):Auth
    addProject(name: String!, description: String!, image: String!)
    addTech(name: String!, projectId: ID):Project
    removeProject(projectId: ID):Project
    removeTech(projectId: ID, techId: ID):Project
  }
`;

module.exports = typeDefs;
