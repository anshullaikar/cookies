// import React from "react";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/about">About Us</Link>
//       <Link to="/form">Shop</Link>
//     </div>
//   );
// }

// export default NavBar;

//In the Navbar.js file
import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../styles/globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./NavBar.styles";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Home Made
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/cookies">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/cookies/about">
                  About
                </MenuLink>
              </MenuItem>
              <MenuItemBtn>
                {button ? (
                  <MenuLinkBtn to="/cookies/form">
                    <Button primary>Order Now</Button>
                  </MenuLinkBtn>
                ) : (
                  <MenuLinkBtn to="/cookies/form">
                    <Button primary bigFont onClick={closeMenu}>
                      Order Now
                    </Button>
                  </MenuLinkBtn>
                )}
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
