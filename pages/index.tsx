import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>
        <Link href="/user">
          <a>유저 화면으로 이동</a>
        </Link>
      </h1>
    </div>
  );
}

export default Home;
