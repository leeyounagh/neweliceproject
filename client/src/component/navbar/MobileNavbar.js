import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MobilenavbarItems from "./MobileNavbarData";
import ShareKakaotalk from "../main/ShareKakaotalk";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = (props) => {
  const [navbarItems, setNavbarItems] = useState([]);
  useEffect(() => {
    axios.get("/navbarData.json").then((response) => {
      const { navbarItems } = response.data;
      setNavbarItems(navbarItems);
    });
  }, []);

  const SetModalClose = () => {
    props.ismodal = false;
  };

  return (
    <MobileContainer>
      <CloseDiv onClick={SetModalClose}>
        <AiOutlineClose size="50"></AiOutlineClose>
      </CloseDiv>

      <MobileInnerDiv>
        {navbarItems.map((item) => {
          return (
            <>
              <MobileNavbarText>
                <a href={item.link}> {item.title}</a>
              </MobileNavbarText>
            </>
          );
        })}
        {MobilenavbarItems.map((item) => {
          return (
            <>
              <MobileNavbarText>
                <a href={item.link} target="_blank" rel="noreferrer noopener">
                  {" "}
                  {item.title}
                </a>
              </MobileNavbarText>
            </>
          );
        })}
        <MobileNavbarText>
          <ShareKakaotalk />
        </MobileNavbarText>
      </MobileInnerDiv>
    </MobileContainer>
  );
};
const CloseDiv = styled.div``;
const MobileContainer = styled.div`
  position: fixed;
  padding: 20px;
  left: 0px;
  top: 0px;
  width: 350px;
  height: 900px;
  background-color: rgb(252, 246, 244);
  z-index: 110;
  animation: modal_ani 0.5s linear;

  @keyframes modal_ani {
    0% {
      width: 0%;
    }
    100% {
      width: 300px;
    }
  }
`;
const MobileNavbarText = styled.div``;
const MobileInnerDiv = styled.div`
  margin-top: 50px;
  height: 60%;
  display: grid;
  place-items: start center;

  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
  }
`;
export default MobileNavbar;
