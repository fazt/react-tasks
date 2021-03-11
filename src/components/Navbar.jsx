import React from "react";

const Navbar = ({ title = "My Title", tasks = [] }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand">{title}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-link d-flex align-items-center">
              <span style={{ marginRight: "7px" }}>Tasks</span>
              <span className="badge bg-danger">{tasks.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;
