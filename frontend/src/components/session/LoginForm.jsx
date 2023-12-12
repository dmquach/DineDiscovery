import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import "./LoginForm.css";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        // if (data?.errors) setErrors(data.errors);
        if (data?.errors) {
          const errorsArray = Object.keys(data.errors).map((key) => {
            return <li key={key}>{data.errors[key]}</li>;
          });
          setErrors(errorsArray);
        } else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );

  };
  return (
    <>
      <ul className="error">
        {errors.map((error) => (
          <li  key={error}>The email address or password you entered is incorrect.</li>
        ))}
      </ul>
    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="loginIntro">
        <h1>Log In</h1>
        <div>
          <h4>
            New? <br /> <Link className="signupLink" to="/signup">
            Sign Up
          </Link>
          </h4>

        </div>
      </div>

      <div className="formInputs">
        <label>email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {/* <span>Forgot password?</span> */}
        <button type="submit">Log In</button>
      </div>
    </form>
    </>
  );
};

export default LoginFormPage;
