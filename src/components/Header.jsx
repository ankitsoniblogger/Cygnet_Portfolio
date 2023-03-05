import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>
        <HashLink to="/#home">Cygnet</HashLink>
      </h1>
      <main>
        <HashLink to="/#home"> Home</HashLink>
        <HashLink to="/#about"> About</HashLink>
        <HashLink to="/#brand"> Brands</HashLink>
        <Link to="/services"> Services</Link>
        <Link to="/contact"> Contact</Link>
      </main>
    </nav>
  );
};

export default Header;
