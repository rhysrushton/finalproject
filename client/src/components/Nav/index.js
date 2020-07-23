import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/books">
        React Reading List
      </a>
      <a className="navbar-brand" href="/">
        Signin
      </a>
    </nav>
  );
}

export default Nav;
