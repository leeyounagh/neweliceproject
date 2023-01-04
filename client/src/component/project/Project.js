import React, { useState } from "react";
import styled from "styled-components";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ItemPage from "./ProjectItems/Itempage";

const Project = () => {
  let [pageCount, setPageCount] = useState(1);

  const PageHandler = (e) => {
    if (e.target.id === "next") {
      setPageCount(pageCount + 1);
      if (pageCount === 3 || pageCount === 4) {
        if (pageCount === 4) {
          setPageCount(4);
        }
      }
    }

    if (e.target.id === "previous") {
      setPageCount(pageCount - 1);
      if (pageCount === 1 || pageCount === 2) {
        if (pageCount <= 1) {
          setPageCount(1);
        }
      }
    }
  };
  return (
    <>
      <Section id={pageCount}>
        <ProjectInnerDiv>
          <ItemPage page={pageCount} />

          <PageButtonDiv>
            <PageButton onClick={(e) => PageHandler(e)}>
              <GrPrevious id="previous" size="50"></GrPrevious>
            </PageButton>

            {/* 이전버튼 */}
            <PageButton onClick={(e) => PageHandler(e)}>
              <GrNext id="next" size="50"></GrNext>
            </PageButton>

            {/* 이후버튼 */}
          </PageButtonDiv>
        </ProjectInnerDiv>
      </Section>
    </>
  );
};
const Section = styled.section`
  width: 100vw;
  height: 80vh;
  background-image: ${(props) =>
    props.id === 1 || props.id === 2
      ? "url(빈트에이지.png)"
      : props.id === 3 || props.id === 4
      ? "url(비행기.png)"
      : "url(비행기.png)"};
  background-size: cover;
  background-repeat: none;
  position: relative;

  @media (max-width: 640px) {
    width: 100vw;
    margin-top: 30px;
    height: 90vh;
  }
`;

const ProjectInnerDiv = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(1.1) blur(50px);
  display: grid;
  place-items: center center;

  @media (max-width: 640px) {
    position: relative;
  }
`;

const PageButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-between;
  }
`;
const PageButton = styled.button`
  height: 100%;
  border: 0;
  opacity: 0.5;
  background-color: transparent;
  cursor: pointer;
  &: hover {
    transform: scale(1.2);
    opacity: 1.4;
  }
`;
export default Project;
