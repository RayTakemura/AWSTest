import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import StudentList from "./pages/StudentList";
import StudentSearch from "./pages/StudentSearch/StudentSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StudentList />} />
          <Route path="student-search" element={<StudentSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
