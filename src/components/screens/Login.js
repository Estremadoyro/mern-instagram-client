import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
    return;
  };

  const loginUser = async () => {
    try {
      setLoading(true);
      const post = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const response = await post.json();
      console.log(response);
      if (response.error) {
        setError(response.error);
      } else {
        localStorage.setItem("jwt", response.token); 
        localStorage.setItem("user", JSON.stringify(response.user)); 
        setError("");
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    return (() => {setLoading(false);}); 
    
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card-body mx-md-auto" style={{ minWidth: "55%" }}>
          <h2 className="text-center mb-4">Login</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {" "}
              {error}
            </div>
          )}
          <form className="form" onSubmit={handleSubmit}>
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

            <button
              disabled={loading}
              className="btn btn-lg btn-primary w-100 text-center mt-2"
            >
              Log In
            </button>
          </form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>

      <div className="w-100 text-center mt-2">
        Need an account?&nbsp;
        <Link to="/register">Sign Up</Link>
      </div>
    </Fragment>
  );
};

export default Login;
