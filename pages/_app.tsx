import type { AppProps } from "next/app";
import "antd/dist/antd.css";

import { wrapper } from "@store/index";
import LayoutCus from "@component/layout";

// ts는 const에 function을 선언하는 것을 좋아하지 않음 -> 에러 발생시킴
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutCus>
      <Component {...pageProps} />
    </LayoutCus>
  );
}

// HOC 패턴으로 wrapper 적용
// wrapper로 감싸서 store와 persist 적용 -> store와 persist가 wrapper에 할당된 상태
export default wrapper.withRedux(MyApp);
