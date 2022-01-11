import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/Nav";
import Create from "./component/NavList/Create";
import MyRecipe from "./component/NavList/MyRecipe";
import Login from "./component/NavList/Register/Login";
import SignUp from "./component/NavList/Register/SignUp";
import Home from "./component/Home";

function App() {
  // const [sumbit, setSumit] = useState(false);
  // function submitForm() {
  //   setSumit(true);
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/List" element={<MyRecipe />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        {/* <>
          <div className="form-container">
            <span className="close-btn">×</span>
            <div className="form-content-left">
              <img className="form-img" src="img/img-2.svg" alt="spaceship" />
            </div>
            {!setSumit ? <SignUp submitForm={submitForm} /> : <Home />}
          </div>
        </> */}
        {/* <SignUp /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
