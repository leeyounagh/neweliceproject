import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import SkillDesc from "../SkillDesc";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["React.js", "javascript", "Html", "Css", "MongoDb", "nodejs"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 12, 10, 12, 2, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <ChartContainer>
      {window.innerWidth <= 640 ? (
        <>
          <MobilePieDiv>
            <Pie data={data} />
          </MobilePieDiv>
          <MobileDescDiv>
            <SkillDesc />
          </MobileDescDiv>
        </>
      ) : (
        <>
          <Pie data={data} />
          <SkillDesc />
        </>
      )}
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 60vw;
  height: 60vh;

  margin-top: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;

  background-color: rgb(252, 246, 244);
  @media (max-width: 640px) {
    display: inline-block;
    width: 100vw;
    height: 1000px;
    margin-bottom: 50px;
  }
`;
const MobilePieDiv = styled.div`
  width: 100%;
  height: 65vh;
  margin-top: 50px;
`;
const MobileDescDiv = styled.div``;
export default Chart;
