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

export const SEARCH_STUDENT = gql`
  query Student($studentId: ID){
    student(id: $studentId){
      id, 
      firstName,
      lastName,
      age
    }
  }
`