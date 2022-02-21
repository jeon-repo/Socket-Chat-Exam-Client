import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

// TriggerWLM 전역 변수 형태로 선언
declare global {
  interface Window {
    TriggerWLM: any;
  }
}

// Custom Type
interface TitleProps {
  text: string;
}
// Custom Type 적용
const Title: NextPage<TitleProps> = ({ text }) => {
  useEffect(() => {
    var myTrigger = new window.TriggerWLM(document.querySelector("#hospital"), {
      customerID: "flexsys",
      screenID: "test",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFobiIsIm5hbWUiOiLrsJTrs7QiLCJpYXQiOjE1MTYyMzkwMjJ9._woaxjLjZ_742ybzjlK84brnMfUMJhnvM3WObu5pNHc",
    });
  }, []);

  return (
    <Head>
      <title>{text}</title>

      <script
        type="text/javascript"
        src="http://flexsys.co.kr/demo/wlm/index.bundle.js"
      ></script>
      <script
        type="text/javascript"
        src="http://flexsys.co.kr/demo/wlm/vendors.bundle.js"
      ></script>
      <link
        href="http://flexsys.co.kr/demo/wlm/assets/css/index.css"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default Title;
