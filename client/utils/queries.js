import { gql } from "@apollo/client";

export const QUERY_DEVELOPERS = gql`
  query developers {
    developers {
      _id
      name
      email
      password
      job_status
      position
      projects {
        _id
        name
        description
        image
        tech {
          _id
          name
        }
      }
      bio
    }
  }
`;

export const QUERY_SINGLE_DEVELOPER = gql`
  query developer($email: String!) {
    developer(email: $email) {
      _id
      name
      email
      password
      job_status
      position
      bio
      projects {
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
  }
`;

export const QUERY_SINGLE_RECRUITER = gql`
  query recruiter($email: String!) {
    recruiter(email: $email) {
      _id
      name
      email
      password
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql``;
