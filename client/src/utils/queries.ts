// Import everything needed to use the `useQuery` hook
import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query Students {
    students {
      id
      firstName
      lastName
      age
    }
  }
`;
