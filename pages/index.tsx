import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>&lt;내부 페이지&gt;</h1>
      <h1>
        <Link href="/user">
          <a>유저 화면으로 이동</a>
        </Link>
      </h1>
      <h1>
        <Link href="/mobile">
          <a>모바일 화면으로 이동</a>
        </Link>
      </h1>
      <h1>&lt;외부 페이지&gt;</h1>
      <h1>
        <Link href="/api/test-redirect">
          <a>redirect 테스트 화면으로 이동</a>
        </Link>
      </h1>
      <h1>
        <Link href="/api/test-rewrite">
          <a>rewrite 테스트 화면으로 이동</a>
        </Link>
      </h1>
    </div>
  );
}

export default Home;
