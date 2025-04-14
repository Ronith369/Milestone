import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4 py-3 shadow-sm" id="main-navbar">
      <div className="container-fluid d-flex flex-wrap align-items-center">
        <a className="navbar-brand fw-bold fs-4" href="#">Pabbas</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Offers</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Locations</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search 🍨" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">LogIn</button>
          </form>

          <a href="#" className="me-3 fs-5">
            <i className="fas fa-shopping-cart"></i>
          </a>

          <button className="btn btn-outline-dark" id="darkModeToggle">🌙</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
