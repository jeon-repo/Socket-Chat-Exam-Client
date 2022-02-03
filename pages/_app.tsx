import { wrapper } from "@store/index";
import type { AppProps } from "next/app";

// ts는 const에 function을 선언하는 것을 좋아하지 않음 -> 에러 발생시킴
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

// HOC 패턴으로 wrapper 적용
// wrapper로 감싸서 store와 persist 적용 -> store와 persist가 wrapper에 할당된 상태
export default wrapper.withRedux(MyApp);