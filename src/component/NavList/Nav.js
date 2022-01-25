import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Data } from "./Register/Data";
import { AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <Navbar>
        <Container>
          <a className="navStyle" href="#home">
            Zi Recipe-Zone
          </a>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar className="navStyle ">
              {/* <Link to={"/Login"} className="navName" href="#login">
                SignIn
              </Link> */}
              <div className="bar">
                <Link to="#" className="menu-bar">
                  <GiHamburgerMenu
                    onClick={showMenu}
                    style={{ fontSize: "1.2em" }}
                  />
                </Link>
                <nav className={menu ? "nav-menu active" : "nav-menu"}>
                  <ul className="menu-item" onClick={showMenu}>
                    <li className="nav-toggle">
                      {/* <Link to="#" className="navLink">
                        <AiOutlineClose />
                      </Link> */}
                    </li>
                    {Data.map((item, index) => {
                      return (
                        <li key={index} className={item.className}>
                          <Link to={item.path} className="navLink">
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
