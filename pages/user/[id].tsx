import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log("detail -> ", router);
  return (
    <div>
      <h4>{router.query.id || "id 로딩중..."}</h4>
      <h4>{router.query.text || "text 로딩중..."}</h4>
    </div>
  );
}
