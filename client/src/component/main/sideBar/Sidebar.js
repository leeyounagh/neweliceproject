import React, { useEffect } from "react";
import styled from "styled-components";
import { FaBloggerB } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import ShareKakaotalk from "../ShareKakaotalk";

const Sidebar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <SidebarContainer>
      <IconDiv>
        <SidbarAtag
          target="_blank"
          href="https://velog.io/@dudgk0216"
          rel="noreferrer noopener"
        >
          <FaBloggerB size="50" />
        </SidbarAtag>
      </IconDiv>
      <IconDiv>
        <SidbarAtag
          target="_blank"
          href="https://github.com/leeyounagh"
          rel="noreferrer noopener"
        >
          <BsGithub size="50" />
        </SidbarAtag>
      </IconDiv>
      <IconDiv>
        <SidbarAtag
          target="_blank"
          href="https://www.instagram.com/dlduddkdla/"
          rel="noreferrer noopener"
        >
          <AiFillInstagram size="50" />
        </SidbarAtag>
      </IconDiv>
      <IconDiv>
        <SidbarAtag
          target="_blank"
          href="https://www.youtube.com/channel/UCQH2wAqmaRE7HdUpdULYJjg"
          rel="noreferrer noopener"
        >
          <BsYoutube size="50" />
        </SidbarAtag>
      </IconDiv>
      <IconDiv>
        <ShareKakaotalk />
      </IconDiv>
      {/* 카카오톡 공유하기 */}

      <IconBorder></IconBorder>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 6vw;
  height: 60vh;
  display: grid;
  place-items: start center;
  position: relative;
  z-index: 200;
`;
const SidbarAtag = styled.a`
  text-decoration: none;
  color: black;
`;
const IconDiv = styled.div`
  animation: transform 2000ms linear alternate;
  pointer: cursor;
  @keyframes transform {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;
const IconBorder = styled.div`
  height: 150px;
  z-index: 10;
  margin-top: 15px;
  border-left: solid black;
  position: absolute;
  top: 88%;

  animation: bordertransform 2000ms linear alternate;

  @keyframes bordertransform {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;
export default Sidebar;
