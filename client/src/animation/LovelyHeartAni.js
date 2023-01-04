import React, { useEffect } from "react";
import Lottie from "lottie-web";
import LovelyHeart from "./lovelyheart.json";

const LovelyHeartAni = () => {
  const container = document.querySelector("#container");

  useEffect(
    () =>
      Lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        LovelyHeart: LovelyHeart,
      }),
    []
  );
  return (
    <>
      <div id="container" style={{ width: "200px" }}></div>
    </>
  );
};

export default LovelyHeartAni;
