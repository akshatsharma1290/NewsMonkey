import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", text: "Home" },
  { path: "/business", text: "Business" },
  { path: "/entertainment", text: "Entertainment" },
  { path: "/general", text: "General" },
  { path: "/health", text: "Health" },
  { path: "/science", text: "Science" },
  { path: "/sports", text: "Sports" },
  { path: "/technology", text: "Technology" },
];


const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          News Monkey
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             {
               links.map((link)=>{
                 return <li className="nav-item" key={link.path}>
                 <NavLink className="nav-link" to={link.path}>
                  {link.text}
                </NavLink>
                 </li>
               })
             }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
