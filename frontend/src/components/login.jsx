import React, { useState } from "react";
import "./login.css";
import { Navbar } from "../layout/navbar";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/apiCall";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const values = { email, password };
      const res = await api.post("/user/login", values);
      if (res && res.data.success) {
        localStorage.setItem("access_token", res.data.token);
        localStorage.setItem("_id", res.data.user._id);
        localStorage.setItem("login", true);
        setUsers(res.data);
        toast.success(res.data.message);
        navigate("/");
      }
      if (res.status === 401) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div id="loginpage">
        <div className="card card-body">
          <h2>Login Form</h2>
          <form
            className="container justify-content-center"
            onSubmit={handleLogin} // Handle the form submission
          >
            <div className="form-outline mb-2">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
