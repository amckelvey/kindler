const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Developer{
    _id: ID!
    name: String!
    email: String!
    password: String!
    job_status: String!
    position: String!
    projects: [Project]
    bio: String
  }

  type Recruiter{
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
    developer(name: String!): Developer
    recruiters: [Recruiter]
    recruiter(name: String!): Recruiter 
    tech: [Tech]
    project: [Project]

  }  

  type Auth {
    token: ID!
    user: User
  }

  type Mutations {
    addDev(name: String!, email: String!, password: String!):Auth
    addRecruiter(name: String!, email: String!, password: String!):Auth
    login(email: String!, password: String!):Auth
    addProject(name: String!, description: String!, image: String!)
    addTech(name: String!, projectId: ID):Project
    removeProject(projectId: ID):Project
    removeTech(projectId: ID, techId: ID):Project
  }
`;

module.exports = typeDefs;
