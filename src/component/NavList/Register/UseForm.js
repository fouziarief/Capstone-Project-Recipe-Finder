import { useState, useEffect } from "react";

const useForm = (Validate) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    password1: "",
  });

  const [errors, setErrors] = useState({});
  const [sumbit, setSumit] = useState(false);

  const HandleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const HandleSumbit = (e) => {
    setErrors(Validate(values));
    e.preventDefault();
  };
  //   useEffect(() => {
  //     if (Object.keys(errors).length === 0) {
  //       callback();
  //     }
  //   }, [errors]);
  return { HandleChange, values, HandleSumbit, errors };
};
export default useForm;
