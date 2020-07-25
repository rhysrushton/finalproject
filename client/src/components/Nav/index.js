import React from "react";
import "./nav-style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white">
      
      <div class="n">
         <a className="navbar-link" href="/">
        Home
      </a>
      <a className="navbar-link" href="/books">
        React Reading List
      </a>
      </div>
   
    </nav>
  );
}

export default Nav;
