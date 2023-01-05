import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SkillDesc = () => {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    axios.get("/AboutDescData.json").then((res) => {
      const { aboutDesc } = res.data;
      setDesc(aboutDesc);
    });
  }, []);

  return (
    <SkillDescContainer>
      <SkillTitleDiv>Front-Engineer가 되기 위하여..</SkillTitleDiv>
      {desc.map((item) => {
        return (
          <>
            <SkillInnerText>
              {item.date} {item.desc}
            </SkillInnerText>
          </>
        );
      })}

      <SkillTitleDiv>Skills</SkillTitleDiv>
      {window.innerWidth <= 640 ? (
        <>
          <SkillInnerText>Html,javascript,Css,</SkillInnerText>
          <SkillInnerText>React,MongoDb,nodeJs</SkillInnerText>
        </>
      ) : (
        <SkillInnerText>
          Html,javascript,Css,React,MongoDb,nodeJs
        </SkillInnerText>
      )}
    </SkillDescContainer>
  );
};

const SkillDescContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  margin-left: 100px;
  border: 2px solid black;
  text-align: center;
  display: grid;
  background-color: rgb(252, 246, 244);
  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 640px) {
    margin-top: 50px;
    width: 80%;
    height: 600px;
    margin: 5px;
    display: block;
  }
`;
const SkillTitleDiv = styled.div`
  font-size: 1.5rem;
  margin-top: 5px;
  width: 100%;
  height: 8%;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 1.3rem;
  }
`;
const SkillInnerText = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;

  width: 100%;
  text-align: center;
  font-family: "KIMM_Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KIMM_Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

export default SkillDesc;
