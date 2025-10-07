import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/project">project</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
