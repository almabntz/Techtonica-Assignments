import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navBarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="AboutMe" activeStyle>
            About Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;