import React from "react";
import useForm from "./UseForm";
import { Link } from "react-router-dom";
import Validate from "./Validate";

function SignUp() {
  const { HandleChange, values, HandleSumbit, errors } = useForm(Validate);

  return (
    <div className="content-right">
      <form className="form" onClick={HandleSumbit}>
        <h1>Sign up here</h1>
        <div className="form-detail">
          <label htmlFor="UserName" className="form-label">
            UserName
          </label>
          <input
            id="UserName"
            type="text"
            name="userName"
            className="form-input"
            placeholder="Enter your UserName"
            value={values.userName}
            onChange={HandleChange}
          />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className="form-detail">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your Email"
            value={values.email}
            onChange={HandleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-detail">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your Password"
            value={values.password}
            onChange={HandleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-detail">
          <label htmlFor="password1" className="form-label">
            Confirm Passowrd
          </label>
          <input
            type="password"
            name="password1"
            className="form-input"
            placeholder="ReEnter Yor Password"
            value={values.password1}
            onChange={HandleChange}
          />
          {errors.password1 && <p>{errors.password1}</p>}
        </div>
        <button className="form-btn" type="submit">
          SignUp
        </button>
        <span className="form-login">
          Already an Account? Login
          <Link to={"/Login"} href="Login">
            Here
          </Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
