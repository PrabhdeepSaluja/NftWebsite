import React from "react";
import { Link, Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <div>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </div>
    </>
  );
};

export default index;
