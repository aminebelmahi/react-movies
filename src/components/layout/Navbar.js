import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <Link className="navbar-brand text-light">React Movies</Link>
    </nav>
  );
};

export default Navbar;
