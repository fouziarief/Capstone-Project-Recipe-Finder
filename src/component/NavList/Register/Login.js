import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import "./userLogin.css";

function Login() {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    loginForm,
    formState: { errors },
  } = useForm();
  const onClick = (data) => {
    setLogin(true);
    console.log(data);
  };
  return (
    <div className="userBox">
      <Form onSubmit={handleSubmit(onClick)} className="userForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="user-label">Email</Form.Label>
          <Form.Control
            type="email"
            className="userInput"
            placeholder="Enter email"
            name="userName"
            {...register("userName", { required: true, minLength: 5 })}
          />
          {errors.userName && <p className="error">Invalid Username</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="user-label">Password</Form.Label>
          <Form.Control
            type="password"
            className="userInput"
            placeholder="Password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password && (
            <p className="error">Password must be more than 5 letters </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" className="btn-login" type="Login">
          Submit
        </Button>
        <div className="footer">
          <a href="#">Forget Password</a>
          <p>
            <a href="#">Signup</a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Login;
