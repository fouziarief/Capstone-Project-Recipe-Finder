import React from "react";

export default function Validate(values) {
  let errors = {};
  if (!values.userName.trim()) {
    errors.userName = "Username required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password1) {
    errors.password1 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password1 = "Passwords do not match";
  }
  return errors;
}
