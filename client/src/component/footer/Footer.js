import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItemDiv>Contact</FooterItemDiv>
      <FooterItemDiv>
        <FooterText>phone:010-7284-0216</FooterText>
      </FooterItemDiv>
      <FooterItemDiv>
        <FooterText>E-mail:dudgk0216@naver.com</FooterText>
      </FooterItemDiv>
      <FooterItemDiv>
        <FooterText>Copyright 2023 by suyoen All Rights Reserved.</FooterText>
      </FooterItemDiv>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100vw;
  height: 5vh;
  padding: 10px;
  background-color: rgb(252, 246, 244);
`;

const FooterItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  font-size: 15px;
  @media (max-width: 640px) {
    font-size: 0.5rem;
    margin: 3px;
  }
`;

export default Footer;
