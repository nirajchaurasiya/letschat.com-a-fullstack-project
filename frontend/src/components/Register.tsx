import { Link } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
export default function Register() {
  const checkBackend = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("register");
    axios
      .get("/backend/get")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-container">
      <div className="register-mid-container">
        <form onSubmit={checkBackend} className="form-control">
          <div className="form-heading">
            <div className="logo-image">
              <img src="/logo2.png" alt="" />
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
            <button>Register</button>
          </div>
          <div
            style={{ display: "flex", gap: "5px", paddingTop: "15px" }}
            className="btn-control"
          >
            <p>Already have an account?</p>
            <Link to="/auth/login">Login Here</Link>
          </div>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
