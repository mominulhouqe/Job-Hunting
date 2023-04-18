import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-light">
      <nav className="navbar p-5 navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            JobForge
          </Link>
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
          <div
            className="collapse   d-md-flex justify-content-between navbar-collapse"
            id="navbarNav"
          >
            <div className=" ">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link text-primary fw-bold active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-primary" to="/statics">
                    Statistics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary " to="/applied">
                    Applied Jobs
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-primary " to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <button className="btn btn-primary border">Star Applying </button>
            </div>
          </div>
        </div>
      </nav>
    

    
    </div>
  );
};

export default Header;
