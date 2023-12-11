import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeAccessToken } from "../auth";
export const Navbar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("login")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("_id");
    localStorage.setItem("login", false);
    removeAccessToken();
    navigate("/login");
  };
  return (
    <>
      <ToastContainer />
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Movies Site
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
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/movieList" className="nav-link">
                    Movies
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center">
                  {isLogin === false ? (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  ) : (
                    <>
                      {/* <Link className="nav-link" to="/booking-history">
                        Booking History
                      </Link> */}
                      <button
                        className="btn btn-danger ms-4"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
