import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserAuth } from "../contexts/UserContext";

import "../Styles.css";

export default function Navbar() {
  const { authState, authActions } = useUserAuth();
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    authActions.userLogOut();
    history.push("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          InstaLoL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {authState.user ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/create"
                  >
                    Create Post
                  </Link>
                </li>

                <ul className="nav navbar-lg ml-auto">
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-danger text-white active my-auto"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
