// import { GraphQLError } from "graphql";
const { Student } = require("../models/Student.js");
const User = require("../models/User.js");
// const { ApolloError } = require("apollo-server-errors");
const { ApolloServerErrorCode } = require("@apollo/server/errors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { signToken } = require("../utils/auth.js");
const resolvers = {
  Query: {
    greetings: () => "GraphQL is Awesome",
    welcome: (parent, args) => `Hello ${args.name}`,
    students: async () => await Student.find({}),
    student: async (parent, args) => {
      let student = await Student.findById(args.id);
      return student;
    },
    findStudentByFirstName: async (parent, args) => {
      let student = await Student.find({ firstName: args.firstName });
      return student;
    },
    user: (_, { ID }) => User.findById(ID),
  },
  Mutation: {
    create: async (parent, args) => {
      const { firstName, lastName, age } = args;
      const newStudent = new Student({
        firstName,
        lastName,
        age,
      });
      await newStudent.save();
      return newStudent;
    },
    update: async (parent, args) => {
      const { id } = args;
      const result = await Student.findByIdAndUpdate(id, args);
      return result;
    },
    delete: async (parent, args) => {
      const { id } = args;
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (!deletedStudent) {
        throw new Error(`Student with ID ${id} not found`);
      }
      return deletedStudent;
    },
    async addUser(_, { addUserInput: { username, email, password } }) {
      // See if an old user exists with email attempting to register
      const oldUser = await User.findOne({ email });

      // Throw error if that user exists
      if (oldUser) {
        throw new ApolloServerErrorCode.GRAPHQL_PARSE_FAILED();
      }

      // Encrypt password
      let encryptedPassword = await bcrypt.hash(password, 10);

      // Build out mongoose model
      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      // Create our JWT(attach to our User model)
      const token = jwt.sign({ user_id: newUser._id, email }, "UNSAFE_STRING", {
        expiresIn: "2h",
      });

      newUser.token = token;
      // Save our User in MongoDB
      const res = await newUser.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async loginUser(_, { loginInput: { email, password } }) {
      // See if a user exists with the email
      const user = await User.findOne({ email });

      // Check if the entered password equals the encrypted password
      if (user && (await bcrypt.compare(password, user.model))) {
        // Create a NEW token
        const token = jwt.sign({ user_id: user._id, email }, "UNSAFE_STRING", {
          expiresIn: "2h",
        });
        // Attach token to user model that we found above
        user.token = token;
        return {
          id: user.id,
          ...user._doc,
        };
      } else {
        // If user doesn't exist, return error
        throw new ApolloServerErrorCode.GRAPHQL_PARSE_FAILED();
        // throw new GraphQLError("Incorrect password", {
        //   extensions: {
        //     code: "INCORRECT_PASSWORD",
        //   },
        // });
      }
    },
  },
};

module.exports = { resolvers };
