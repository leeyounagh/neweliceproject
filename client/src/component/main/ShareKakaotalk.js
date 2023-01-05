import React, { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import styled from "styled-components";

const ShareKakaotalk = (props) => {
  useEffect(() => {
    <Button></Button>;
  }, []);
  const shareToKatalk = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init("3e05bdbf74cf401ace1555060c34d34f");
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "suyoen playlist",
          description: "이수연의 포트폴리오입니다.",
          imageUrl: "카톡썸네일.png", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: "https://glittery-gumdrop-57389e.netlify.app",
            webUrl: "https://glittery-gumdrop-57389e.netlify.app",
          },
        },

        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "https://glittery-gumdrop-57389e.netlify.app",
              webUrl: "https://glittery-gumdrop-57389e.netlify.app",
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: "https://glittery-gumdrop-57389e.netlify.app",
              webUrl: "https://glittery-gumdrop-57389e.netlify.app",
            },
          },
        ],
      });
    } else {
      alert("공유가 지원되지않는 환경입니다.");
    }
  };

  return (
    <>
      <Button id="kakao-link-btn" onClick={() => shareToKatalk()}>
        <RiKakaoTalkFill size="60"></RiKakaoTalkFill>
      </Button>
    </>
  );
};
const Button = styled.button`
  border: none;
  z-index: 10;
  cursor: pointer;
  background-color: rgb(252, 246, 244);
`;

export default ShareKakaotalk;
