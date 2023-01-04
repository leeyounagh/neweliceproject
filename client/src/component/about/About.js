import React, { useEffect } from "react";
import ParticlesComponent from "./utils/ParticlesComponent";
import Chart from "./utils/Chart";
import Cardswiper from "./Cardswiper";
import Mbti from "./Mbti";
import styled from "styled-components";

const About = () => {
  useEffect(() => {
    <ParticlesComponent />;
  }, []);
  return (
    <>
      {window.innerWidth <= 640 ? null : <ParticlesComponent />}

      <AboutSection>
        <Chart />
      </AboutSection>
      <AboutSection>
        <Cardswiper />
      </AboutSection>
      <AboutSection>
        <Mbti />
      </AboutSection>
    </>
  );
};

const AboutSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-bottom: 5vh;
  @media (max-width: 640px) {
    display: inline-block;
  }
`;
export default About;
