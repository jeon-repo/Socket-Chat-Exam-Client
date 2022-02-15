import { BackTop } from "antd";
import style from "@style/backTop.module.css";

function Floating() {
  const texts = Array.from({ length: 100 });
  console.log(texts.length);

  const TextView = () => {
    console.log("호출");
    return (
      <div>
        {texts.map((text, idx) => (
          <div key={idx}>테스트 텍스트 {idx + 1}</div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ padding: "2em" }}>
      <TextView />
      <BackTop>
        <div className={style.float}>위로</div>
      </BackTop>
    </div>
  );
}

export default Floating;
