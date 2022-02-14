import { useRouter } from "next/router";

import Title from "@component/header/title";

export default function Detail() {
  const router = useRouter();
  console.log("detail -> ", router);
  return (
    <div>
      <Title text={`유저 | ${router.query.id}` || "빈 값"} />
      <h4>{router.query.id || "id 로딩중..."}</h4>
      <h4>{router.query.text || "text 로딩중..."}</h4>
    </div>
  );
}
