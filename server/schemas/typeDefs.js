const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
    students: [Student] #return array of students
    student(id: ID): Student #return student by id
    findStudentByFirstName(firstName: String!): [Student]
    user(id: ID!): User
  }

  # Student object
  type Student {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  # User Object
  type User {
    username: String
    email: String
    password: String
  }

  # Input used for sign-in
  input AddUserInput {
    username: String
    email: String
    password: String
  }

  # Input used for log-in
  input LoginInput {
    email: String!
    password: String!
  }

  # Mutation
  type Mutation {
    create(firstName: String, lastName: String, age: Int): Student
    update(id: ID, firstName: String, lastName: String, age: Int): Student
    delete(id: ID): Student
    addUser(addUserInput: AddUserInput): Auth
    login(loginInput: LoginInput): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = { typeDefs };
