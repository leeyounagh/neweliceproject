import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Mbti = () => {
  const [MbtiCheck, setMbtiCheck] = useState(false);
  const [mbtiValue, setMbtiValue] = useState("");
  let [mbti, setMbti] = useState([]);

  useEffect(() => {
    axios.get("/MbtiData.json").then((res) => {
      const { mbti } = res.data;
      setMbti(mbti);
    });
  }, []);

  const OnSubmit = (e) => {
    e.preventDefault();

    let searchMbti = mbti.filter(
      (item) => item.id.toLowerCase() === mbtiValue.toLowerCase()
    );
    if (searchMbti.length === 0) {
      alert("MBTI를 다시 확인해주세요");
      setMbtiValue("");
      setMbtiCheck(false);
    }
    if (searchMbti.length === 1) {
      setMbtiCheck(true);
    }
  };

  const RetryHandler = () => {
    setMbtiCheck(false);
    setMbtiValue("");
  };
  const MbtiResult = () => {
    return (
      <>
        <MbtiDiv>
          <MbtiResultText>당신의 mbti는 {mbtiValue}입니다.</MbtiResultText>

          {/* 여기에 a태그 넣어서 페이지 이동 */}

          <RetryButton onClick={RetryHandler}>다시하기</RetryButton>

          <a href={`/${mbtiValue}`}>
            <ResultButton>결과 확인하기</ResultButton>
          </a>
        </MbtiDiv>
      </>
    );
  };
  return (
    <MbtiContainer>
      {MbtiCheck === false ? (
        <MbtiDiv>
          <MbtiTitle>당신과 수연이와의 협업 시너지는?</MbtiTitle>
          <MbtiText>당신의 Mbti를 입력해주세요.</MbtiText>
          <InputBox>
            <MbtiInput
              value={mbtiValue}
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setMbtiValue(e.target.value.toLowerCase());
              }}
              placeholder="당신의 mbti를 입력해주세요...😘"
            />
          </InputBox>

          <Form>
            <SubmitButton
              onClick={(e) => {
                OnSubmit(e);
              }}
              type="submit"
            >
              확인
            </SubmitButton>
          </Form>
        </MbtiDiv>
      ) : (
        <MbtiResult />
      )}
    </MbtiContainer>
  );
};
const MbtiContainer = styled.div`
  width: 100vw;
  height: 80vh;

  position: relative;
`;
const InputBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
`;
const Form = styled.form``;
const MbtiDiv = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  width: 60%;
  height: 60%;
  position: absolute;
  left: 20vw;
  top: 10vh;
  background-color: rgb(252, 246, 244);
  @media (max-width: 640px) {
    width: 90%;
    position: absolute;
    left: 5%;
    top: 10vh;
    margin-top: 100px;
  }
`;
const MbtiTitle = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 40px;
  width: 100%;
  height: 20%;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
const MbtiText = styled.div`
  font-size: 30px;
  width: 100%;
  height: 20%;

  margin-top: 10px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const MbtiInput = styled.input`
  width: 40%;
  height: 10%;

  font-size: 20px;
  padding: 10px 10px 5px;
  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  background-color: rgb(252, 246, 244);
  &:focus {
    outline: none;
  }

  transition: all 0.4s;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  @media (max-width: 640px) {
    font-size: 10px;
    position: absolute;
    top: 46%;
    left: 25%;
    height: 8%;
  }
`;
const SubmitButton = styled.button`
  width: 30%;
  height: 10%;
  position: absolute;
  top: 70%;
  left: 33%;
  font-size: 1.2rem;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;

  transition: all 0.4s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const MbtiResultText = styled.div`
  font-size: 40px;

  width: 100%;
  height: 50%;
  padding-top: 15%;

  text-align: center;
  @media (max-width: 640px) {
    padding-top: 30%;
    height: 50%;
    font-size: 1.5rem;
  }
`;

const ResultButton = styled.button`
  width: 20%;
  height: 10%;
  margin-right: 20px;
  position: absolute;
  left: 55%;
  top: 55%;
  font-size: 1rem;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: "bitbit";
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  transition: all 0.4s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
    position: absolute;
    left: 50%;
    top: 55%;
    width: 38%;
  }
`;
const RetryButton = styled.button`
  width: 20%;
  height: 10%;
  margin-right: 20px;
  position: absolute;
  left: 30%;
  top: 55%;
  font-size: 25px;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;

  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  transition: all 0.4s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
    position: absolute;
    left: 15%;
    top: 55%;
    width: 30%;
  }
`;
export default Mbti;
