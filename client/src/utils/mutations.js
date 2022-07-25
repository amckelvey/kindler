import { gql } from "@apollo/client";

export const DEV_LOGIN = gql`
  mutation devLogin($email: String!, $password: String!) {
    devLogin(email: $email, password: $password) {
      token
      role
    }
  }
`;

export const REC_LOGIN = gql`
  mutation recLogin($email: String!, $password: String!) {
    recLogin(email: $email, password: $password) {
      token
      role
    }
  }
`;

export const ADD_DEV = gql`
  mutation addDev($name: String!, $email: String!, $password: String!) {
    addDev(name: $name, email: $email, password: $password) {
      token
      role
    }
  }
`;

export const ADD_RECRUITER = gql`
  mutation addRecruiter($name: String!, $email: String!, $password: String!) {
    addRecruiter(name: $name, email: $email, password: $password) {
      token
      role
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $source: String!
    $link: String!
  ) {
    addProject(
      name: $name
      description: $description
      source: $source
      link: $link
    ) {
      _id
      name
      description
      source
      link
      tech {
        _id
        name
      }
    }
  }
`;
export const ADD_TECH = gql`
  mutation addTech($name: String!, $projectId: ID!) {
    addTech(name: $name, projectId: $projectId) {
      _id
      name
      description
      image
      tech {
        _id
        name
      }
    }
  }
`;

export const REMOVE_PROJECT = gql`
  mutation removeProject($projectId: ID!) {
    removeProject(projectId: $projectId) {
      _id
      name
      description
      image
      tech {
        _id
        name
      }
    }
  }
`;
export const REMOVE_TECH = gql`
  mutation removeTech($projectId: ID!, $techId: ID!) {
    removeTech(projectId: $projectId, techId: $techId) {
      _id
      name
      description
      image
      tech {
        _id
        name
      }
    }
  }
`;

export const ADD_DEVELOPER_DATA = gql`
  mutation addDevInfo(
    $name: String!
    $jobStatus: String!
    $position: String!
    $bio: String!
  ) {
    addDevInfo(
      name: $name
      job_status: $jobStatus
      position: $position
      bio: $bio
    ) {
      _id
      name
      email
      job_status
      position
      bio
    }
  }
`;
