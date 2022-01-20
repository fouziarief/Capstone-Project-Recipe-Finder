import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/NavList/Nav";
import CreateRecipe from "./component/multistep-Recipe/CreateRecipe";
import MyRecipe from "./component/NavList/MyRecipe";
import Login from "./component/NavList/Register/Login";
import SignUp from "./component/NavList/Register/SignUp";
import Home from "./component/Home";

import { AuthProvider } from "./component/NavList/hook/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {/* <AuthProvider> */}
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/AddRecipe" element={<CreateRecipe />} />
          <Route path="/RecipeList" element={<MyRecipe />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        {/* </AuthProvider> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
