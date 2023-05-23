import React from "react";

import "../App.css";

import { Link } from "react-router-dom";
import logo from "../img/favicon.png";

function Navigation() {
  return (
    <div className="Navigation">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand fw-bold" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Packages
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to={"/"} className="nav-link">
                      <span></span>
                      <span className="nav-content">Honeymoon</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-link">
                      <span></span>
                      <span className="nav-content">Solo</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-link">
                      <span></span>
                      <span className="nav-content">Friends</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="nav-link">
                      <span></span>
                      <span className="nav-content">Family</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to={"/"} className="nav-link black">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} className="nav-link black">
                  FAQS
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} className="nav-link black">
                  Contact Us
                </Link>
              </li>
              <div className="enquiry">
                <button>Enquiry</button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
