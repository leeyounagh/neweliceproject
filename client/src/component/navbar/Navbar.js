import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from "./MobileNavbar";

import MobileSound from "./MobileSound";
import axios from "axios";

const Navbar = () => {
  const [navbarItem, setNavbarItems] = useState([]);
  useEffect(() => {
    axios.get("/navbarData.json").then((response) => {
      const { navbarItems } = response.data;
      setNavbarItems(navbarItems);
    });
  }, []);

  const MobileRenderer = () => {
    let [isMobileModal, setisMobileModal] = useState(false);

    const DetectMobile = () => {
      setisMobileModal(!isMobileModal);
    };
    return (
      <MobileContainer>
        <MobileNavbarDiv onClick={DetectMobile}>
          {isMobileModal === false ? (
            <GiHamburgerMenu size="60" />
          ) : (
            <MobileNavbar modal={isMobileModal} />
          )}
        </MobileNavbarDiv>
      </MobileContainer>
    );
  };
  return (
    <Header>
      {window.innerWidth <= 640 ? (
        <>
          <MobileRenderer></MobileRenderer>
          <MobileSound></MobileSound>
        </>
      ) : (
        <NavbarContainer>
          <MenuContainer>
            {navbarItem.map((item) => {
              return (
                <>
                  <MenuItemStyle>
                    <a href={item.link}>{item.title}</a>
                  </MenuItemStyle>
                </>
              );
            })}
          </MenuContainer>
        </NavbarContainer>
      )}
    </Header>
  );
};
const Header = styled.header``;
const MobileNavbarDiv = styled.div`
  width: 60px;
`;
const MobileContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 100vw;
  height: 60px;
`;

const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;

  padding-top: 30px;
  z-index: 5;
  display: flex;
  justify-content: center;
`;
const MenuContainer = styled.div`
  width: 40vw;
  height: 10vh;

  display: flex;
  justify-content: space-around;
`;
const MenuItemStyle = styled.div`
  font-size: 40px;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default Navbar;
