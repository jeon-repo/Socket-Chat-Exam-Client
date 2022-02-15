import Title from "@component/header/title";
import Floating from "@component/mobile/backTop";
import Float from "@component/mobile/float";
import FBtn from "@component/mobile/floatBtn";

function Mobile() {
  return (
    <div>
      <Title text="모바일" />
      {/* 렌더링 최적화를 위해 자식 컴포넌트로 분리 */}
      {/* 행위자 */}
      <FBtn />
      {/* 변동값 */}
      <Float />
      <Floating />
    </div>
  );
}

export default Mobile;
