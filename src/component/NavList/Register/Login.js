import React, { useState } from "react";
import useForm from "./UseForm";
import Validate from "./Validate";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import "./userLogin.css";

function Login() {
  const { HandleChange, values, HandleSubmit, errors } = useForm(Validate);

  return (
    <div className="outer-container">
      <div className="form-container">
        <form className="form" onClick={HandleSubmit}>
          <div className="form-detail">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter Email"
              name="userName"
              value={values.userName}
              onChange={HandleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-detail">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={values.password}
              placeholder="Password"
              onChange={HandleChange}
            />
            {errors.password && <p>{errors.password} </p>}
          </div>
          <span className="form-login">
            <a href="#">Forget Password</a>
          </span>
          <button className="form-btn" type="submit">
            Login
          </button>
          <span className="form-login">
            Not Have an Account?Sign up
            <Link to={"/SignUp"} href="SignUp">
              Here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
