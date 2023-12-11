import React, { useState } from "react";
import { toast } from "react-toastify"; // Import the toast object
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import "./login.css";
import { Navbar } from "../layout/navbar";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/apiCall";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/user/register", {
        name,
        email,
        password,
      });

      if (res.status === 200) {
        toast.success(res.data.message); // Show success message
        navigate("/login");
      }
      if (res.status === 500) {
        toast.error(res.data.message); // Show error message
      }
    } catch (error) {
      toast.error("Something went wrong"); // Show a generic error message
    }
  };

  return (
    <>
      <Navbar />
      <div id="loginpage" style={{ marginTop: "-50px" }}>
        <div className="card card-body">
          <h2>Register Form</h2>
          <form
            className="container justify-content-center"
            onSubmit={handleRegister}
          >
            <div className="form-outline mb-2">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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

            <div className="form-outline mb-2">
              <label className="form-label">Password</label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block ">
              Register
            </button>

            <div className="text-center">
              <p>
                Already Registered? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
