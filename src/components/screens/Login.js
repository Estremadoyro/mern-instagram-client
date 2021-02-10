import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserContext";
import { login } from "../../api/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { authActions } = useUserAuth();

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    let u = false;

    const post = await login(email, password);
    if (!u) {
      if (post.error) {
        setError(post.error);
      } else {
        localStorage.setItem("jwt", post.data.token);
        localStorage.setItem("user", JSON.stringify(post.data.user));
        authActions.authStateChanged(post.data.user);
        history.push("/");
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
          <h2 className="text-center mb-4">Login</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {" "}
              {error}
            </div>
          )}
          <form className="form" onSubmit={loginUser}>
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
