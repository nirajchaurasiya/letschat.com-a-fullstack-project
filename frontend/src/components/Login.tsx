import { Link } from "react-router-dom";
import "../styles/login.css";
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-mid-container">
        <div className="form-control">
          <div className="form-heading">
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
            <p>Join Now</p>
          </div>
          {/* Form input */}
          <div className="form-input">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                name="password"
              />
            </div>
          </div>
          {/* Button */}
          <div className="btn-control">
            <button>Login</button>
          </div>
          <div
            style={{ display: "flex", gap: "5px", paddingTop: "15px" }}
            className="btn-control"
          >
            <p>Don't have an account?</p>
            <Link to="/auth/register">Register Here</Link>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
