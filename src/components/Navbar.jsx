import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5">
            <img
              src="https://www.altanredes.com//wp-content/uploads/2020/05/componente-altan.png"
              alt="Altan Redes"
              height="40"
            />
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <h4 className="active text-bold" aria-current="page">
                 Swagger API Gateway Reference
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
