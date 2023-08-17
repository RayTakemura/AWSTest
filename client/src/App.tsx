import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "./utils/queries";

function DisplayStudents() {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.students.map(
    ({
      id,
      firstName,
      lastName,
      age,
    }: {
      id: string;
      firstName: string;
      lastName: string;
      age: number;
    }) => (
      <div key={id}>
        <h3>
          {firstName} {lastName}
        </h3>
        <br />
        <p>age: {age}</p>
      </div>
    )
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayStudents />
      </header>
    </div>
  );
}

export default App;
