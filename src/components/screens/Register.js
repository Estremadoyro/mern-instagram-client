import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../api/Auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const postNewUser = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);
    setError("");
    let u = false;

    const post = await register(email, username, name, password);
    if (!u) {
      if (post.error) {
        setError(post.error);
        console.log(post.error);
      } else {
        history.push("/login");
      }
      setLoading(false);
    }
    return () => {
      u = true;
    };
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card-body mx-md-auto" style={{ minWidth: "55%" }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {" "}
              {error}
            </div>
          )}
          <form className="form" onSubmit={postNewUser}>
            <div className="form-group" id="username">
              <div className="label">Username</div>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                required
              />
            </div>

            <div className="form-group" id="name">
              <div className="label">Name</div>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                required
              />
            </div>

            <div className="form-group" id="email">
              <div className="label">Email</div>
              <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
            </div>

            <div className="form-group" id="password">
              <div className="label">Password</div>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
            </div>

            <div className="form-group" id="password-confirm">
              <div className="label">Password Confirmation</div>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
                required
              />
            </div>

            <button
              disabled={loading}
              className="btn btn-lg btn-primary w-100 text-center mt-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="w-100 text-center mt-2">
        Already have an account?&nbsp;
        <Link to="/login">Log in</Link>
      </div>
    </Fragment>
  );
};

export default Register;
