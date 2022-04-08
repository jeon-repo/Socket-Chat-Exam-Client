import Link from "next/link";

import Title from "@component/layout/header/title";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/reducers";
import { useCallback, useEffect } from "react";
import { userReset } from "@store/actions/chat";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.chat);
  const resetUser = useCallback(() => {
    dispatch(userReset());
  }, [dispatch]);

  useEffect(() => {
    resetUser();
  }, []);

  return (
    <div>
      <h1>{user ? user : '없음'}</h1>
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
