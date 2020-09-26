import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn, setUser }) {

  const signOut = () => {
    setIsLoggedIn(false);
    setUser({});
    localStorage.removeItem('token');
  }

  const renderUserNav = () => {
    if (isLoggedIn) {
      return (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Perfil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={signOut}>Salir</Link>
          </li>
        </ul>
      );
    }

    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Iniciar Sesion
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Registrarse
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Auth Example
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        {renderUserNav()}
      </div>
    </nav>
  );
}
