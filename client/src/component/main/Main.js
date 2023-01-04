import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "./sideBar/Sidebar";
import SoundBar from "../navbar/SoundBar";

const Main = () => {
  const [cdCheck, setCdCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCdCheck(true);
    }, 3000);
  }, []);

  return (
    <MainContainer>
      {window.innerWidth <= 640 ? null : <SoundBar></SoundBar>}
      {window.innerWidth <= 640 ? null : (
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      )}
      <MainImgContainer>
        <MainImgDiv>
          <MainCoverContainer>
            <MainCoverLeft>
              {window.innerWidth > 640 ? (
                <MainCoverImg
                  src="cover.png"
                  alt="커버"
                  width="430px"
                  height="450px"
                />
              ) : (
                <MainCoverImg
                  src="cover.png"
                  alt="커버"
                  width="70%"
                  height="240px"
                />
              )}
            </MainCoverLeft>
            <MainCoverRight>
              <MainCoverText>
                Suyoen
                <br /># fall in love with coding
              </MainCoverText>
            </MainCoverRight>
          </MainCoverContainer>
        </MainImgDiv>
        <MainImgDiv>
          {cdCheck === false && window.innerWidth > 640 ? (
            <MainBeforeCdImg
              src="cd.png"
              alt="커버"
              width="430px"
              height="450px"
            />
          ) : cdCheck === true && window.innerWidth > 640 ? (
            <MainCdImg src="cd.png" alt="커버" width="430px" height="450px" />
          ) : cdCheck === false && window.innerWidth <= 640 ? (
            <MainBeforeCdImg
              src="cd.png"
              alt="cd"
              width="240px"
              height="240px"
            />
          ) : cdCheck === true && window.innerWidth <= 640 ? (
            <MainCdImg src="cd.png" alt="cd" width="240px" height="240px" />
          ) : null}
        </MainImgDiv>
        {/* 씨디부분  */}
      </MainImgContainer>
    </MainContainer>
  );
};
const MainImgContainer = styled.div`
  position: relative;

  width: 100vw;
  height: 70vh;
  @media (max-width: 640px) {
    margin: 20px;
    width: 100vw;
    height: 40vh;
  }
`;

const MainContainer = styled.main`
  width: 100vw;
  height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MainCoverContainer = styled.div`
  z-index: 10;
  width: 100%;
`;
const MainCoverLeft = styled.div``;
const MainCoverRight = styled.div`
  position: absolute;
  left: 52%;
  top: 28%;
  z-index: 100;
  @media (max-width: 640px) {
    position: absolute;
    left: 53%;
    top: 8%;
  }
`;

const MainImgDiv = styled.div``;
const MainCoverImg = styled.img`
  z-index: 50;

  position: absolute;
  left: 35%;
  top: 20%;
  @media (max-width: 640px) {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  box-shadow: 5px 5px 26px 5px gray;
`;

const MainCoverText = styled.h1`
  writing-mode: vertical-rl;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;
const MainCdImg = styled.img`
  z-index: 5;
  position: absolute;
  left: 45%;
  top: 20%;

  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 640px) {
    position: absolute;
    left: 35%;
    top: 0px;
  }
`;
const MainBeforeCdImg = styled.img`
  z-index: 5;
  position: absolute;
  left: 35%;
  top: 20%;

  animation: translate_image 3s ease-in;
  transform-origin: 50% 50%;

  @keyframes translate_image {
    100% {
      transform: translateX(200px);
    }
  }
  @media (max-width: 640px) {
    position: absolute;
    left: 20%;
    top: 0px;
    @keyframes translate_image {
      100% {
        transform: translateX(60px);
      }
    }
  }
`;
const SidebarContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 25%;
`;
export default Main;
