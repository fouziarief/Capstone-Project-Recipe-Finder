import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/Nav";
import Create from "./component/NavList/Create";
import MyRecipe from "./component/NavList/MyRecipe";
import Login from "./component/NavList/Register/Login";
import SignOut from "./component/NavList/Register/Logout";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/List" element={<MyRecipe />} />
          <Route path="/SignOut" element={<SignOut />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
