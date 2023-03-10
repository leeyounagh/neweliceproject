import { useEffect, useRef, useState } from "react";

import styled, { keyframes } from "styled-components";

const SoundBar = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(true);
  }, []);
  const ref = useRef(null);

  const handleClick = () => {
    setClick(!click);
    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      {/* {window.innerWidth <= 640 ? null : (
        <Box id={window.innerWidth} onClick={() => handleClick()}>
          <Line click={click} />
          <Line click={click} />
          <Line click={click} />
          <Line click={click} />
          <Line click={click} />

          <audio src="good.mp3" ref={ref} autoPlay />
        </Box>
      )} */}
      <Box id={window.innerWidth} onClick={() => handleClick()}>
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />

        <audio src="good.mp3" ref={ref} autoPlay />
      </Box>
    </>
  );
};
const Box = styled.div`
  display: flex;
  cursor: pointer;

  position: fixed;
  left: ${(props) => (props.id <= 640 ? "18rem" : "8rem")};

  top: ${(props) => (props.id <= 640 ? "2rem" : "3rem")};
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;
const MobileBox = styled.div`
  display: flex;
  cursor: pointer;

  position: fixed;
  left: 20rem;
  top: 2rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;
const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;

const Line = styled.span`
  border: 1px solid ${(props) => props.theme.body};

  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 2rem;
  width: 3px;
  background-color: black;
  margin: 0 0.1rem;
`;

export default SoundBar;
