import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                {" "}
                {/* Add ml-auto to right-align */}
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                 About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Contact-Us
                </a>
              </li>
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

// function Navbar() {
//   return (
//     <nav>
//       <h1>My Online Store</h1>
//     </nav>
//   );
// }

export default Navbar;
