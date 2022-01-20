// import React, { useState, useRef } from "react";
// import useForm from "./UseForm";
// import { Link } from "react-router-dom";
// import Validate from "./Validate";
// import { useAuth } from "../hook/AuthContext";
// import { Alert } from "react-bootstrap";
// import "./userLogin.css";

// function SignUp() {
//   const { HandleChange, values } = useForm(Validate);
//   const userRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const rePasswordRef = useRef();
//   const { signup } = useAuth();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);

//   async function handleSumbit(e) {
//     e.preventDefault();
//     if (passwordRef.current.value !== rePasswordRef.current.value) {
//       return setError("Password Do Not Match");
//     }
//     try {
//       setError("");
//       setLoading(true);
//       await signup(emailRef.current.value, passwordRef.current.value);
//     } catch {
//       setError("Failed to Create an Account");
//     }
//     setLoading(false);
//   }

//   return (
//     <div className="content-right">
//       <form className="form" onClick={handleSumbit}>
//         <h1>Sign up here</h1>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <div className="form-detail">
//           <label htmlFor="UserName" className="form-label">
//             UserName
//           </label>
//           <input
//             id="UserName"
//             type="text"
//             name="userName"
//             className="form-input"
//             placeholder="Enter your UserName"
//             value={values.userName}
//             onChange={HandleChange}
//             ref={userRef}
//           />
//         </div>
//         <div className="form-detail">
//           <label htmlFor="Email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="form-input"
//             placeholder="Enter your Email"
//             value={values.email}
//             onChange={HandleChange}
//             ref={emailRef}
//           />
//         </div>
//         <div className="form-detail">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="form-input"
//             placeholder="Enter your Password"
//             value={values.password}
//             onChange={HandleChange}
//             ref={passwordRef}
//             // required
//           />
//         </div>
//         <div className="form-detail">
//           <label htmlFor="password1" className="form-label">
//             Confirm Passowrd
//           </label>
//           <input
//             type="password"
//             name="password1"
//             className="form-input"
//             placeholder="ReEnter Yor Password"
//             // value={values.password1}
//             // onChange={HandleChange}
//             ref={rePasswordRef}
//             required
//           />
//         </div>
//         <button className="form-btn" type="submit">
//           SignUp
//         </button>
//         <span className="form-login">
//           Already an Account? Login
//           <Link to={"/Login"} href="Login">
//             Here
//           </Link>
//         </span>
//       </form>
//     </div>
//   );
// }
// export default SignUp;
