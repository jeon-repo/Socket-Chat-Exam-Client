import Link from "next/link";

import Title from "@component/layout/header/title";

function Home() {
  return (
    <div>
      <Title text="홈" />
      <h1>&lt;내부 페이지&gt;</h1>
      <h1>
        <Link href="/chat">
          <a>채팅 화면으로 이동</a>
        </Link>
      </h1>
    </div>
  );
}

export default Home;
