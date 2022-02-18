import { useEffect, useState } from "react";

import Title from "@component/header/title";

function getH() {
  return Math.ceil(200 + window.innerHeight / 1000);
}

function getW() {
  return Math.ceil(200 * (window.innerWidth / 500));
}

function TestCapture() {
  const getSize = () => {
    let view = document.getElementById("view");
    console.log("=== getSize ===");
    console.log(window.innerWidth, window.innerHeight);
    console.log(window.outerWidth, window.outerHeight);
    console.log("red rect top -> ", view?.getBoundingClientRect().top);
    console.log("red rect left -> ", view?.getBoundingClientRect().left);
    console.log("red rect bottom -> ", view?.getBoundingClientRect().bottom);
    console.log("red rect right -> ", view?.getBoundingClientRect().right);
    console.log("================");
    setW(getW());
    setH(getH());
  };

  const getLocation = (event: any) => {
    console.log("=== getLocation ===");
    console.log(event.clientX, event.clientY);
    console.log(event.screenX, event.screenY);
    console.log("===================");
  };

  const [h, setH] = useState(getH());
  const [w, setW] = useState(getW());

  useEffect(() => {
    setW(getW());
    setH(getH());
  }, []);

  return (
    <div>
      <Title text="비율 테스트" />
      <button type="button" onClick={getSize}>
        로그 출력하기
      </button>
      <div
        id="view"
        style={{
          height: "200px",
          width: "50%",
          border: "2px solid red",
        }}
        onClick={(event) => getLocation(event)}
      ></div>
      <div
        style={{
          position: "fixed",
          top: `${h}px`,
          left: `${w}px`,
          width: "10px",
          height: "10px",
          border: "2.5px solid #93e8c8",
        }}
        onClick={(event) => getLocation(event)}
      ></div>
    </div>
  );
}

export default TestCapture;
