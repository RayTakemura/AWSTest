import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-red-600">
          AWS TEST PAGE
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Student List</Link>
          </li>
          <li>
            <Link to="/student-search">Search Student</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
