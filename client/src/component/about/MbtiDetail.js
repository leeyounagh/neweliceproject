import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ParticlesComponent from "./utils/ParticlesComponent";
const MbtiDetail = () => {
  const { id } = useParams();
  const [mbti, setMbti] = useState([]);

  useEffect(() => {
    axios.get("/MbtiData.json").then((res) => {
      const { mbti } = res.data;
      setMbti(mbti);
    });
  }, []);

  const result = mbti.filter((item) => id === item.id.toLowerCase());

  const MbtiResultRender = () => {
    return result.map((item) => {
      return (
        <>
          <MbtiInnerTitle>당신의 Mbti는 {item.id} 입니다.</MbtiInnerTitle>
          <MbtiInnerSubTitle>{item.title}</MbtiInnerSubTitle>
          <MbtiInnerText>{item.desc}</MbtiInnerText>
        </>
      );
    });
  };
  return (
    <>
      <MbtiResultContainer>
        {window.innerWidth <= 640 ? null : <ParticlesComponent />}

        <MbtiResultDiv>
          <MbtiResultTitle>
            당신과 이수연의 협업시너지는 최고 입니다!!😍
          </MbtiResultTitle>
          <MbtiResultRender></MbtiResultRender>
        </MbtiResultDiv>
      </MbtiResultContainer>
    </>
  );
};
const MbtiResultContainer = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    margin-top: 100px;
  }
`;
const MbtiResultDiv = styled.div`
  position: relative;
  width: 50%;
  height: 70%;
  border: 2px solid black;
  background-color: rgb(252, 246, 244);
  text-align: center;
  border-radius: 15px;
  padding: 20px;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 80%;
    position: relative;
  }
`;
const MbtiResultTitle = styled.div`
  font-size: 1.5rem;

  margin-top: 80px;
  width: 100%;
  @media (max-width: 640px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const MbtiInnerText = styled.div`
  font-size: 1.2rem;
  margin-top: 5px;
  width: 100%;
  height: 50%;

  @media (max-width: 640px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const MbtiInnerTitle = styled.div`
  font-size: 1.5rem;

  margin-top: 50px;

  width: 100%;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    margin-top: 25px;

    font-size: 1rem;
    text-align: center;
  }
`;

const MbtiInnerSubTitle = styled.div`
  font-size: 1.5rem;

  top: 45%;
  left: 30%;

  width: 100%;
  @media (max-width: 640px) {
    font-size: 1rem;
    text-align: center;
  }
`;
export default MbtiDetail;
