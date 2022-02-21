/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import style from "@style/Test.module.css";

import { RootState } from "@store/reducers";
import { disposableDown, disposableUp } from "@store/actions/disposable";
import { recycleClear, recycleDown, recycleUp } from "@store/actions/recycle";
import Title from "@component/header/title";
import Name from "@component/user/name";

// 컴포넌트 고유로 적용되는 css는 아래처럼 emotion을 통해 작성
const skyBlud = css`
  background-color: skyblue;
`;

function User() {
  const dispatch = useDispatch();
  const { disposable } = useSelector((state: RootState) => state.disposable);
  const { recycle } = useSelector((state: RootState) => state.recycle);
  const router = useRouter();

  const upEventDispo = useCallback(() => {
    dispatch(disposableUp());
  }, [dispatch]);

  const downEventDispo = useCallback(() => {
    dispatch(disposableDown());
  }, [dispatch]);

  const upEventRecycle = useCallback(() => {
    dispatch(recycleUp());
  }, [dispatch]);

  const downEventRecycle = useCallback(() => {
    dispatch(recycleDown());
  }, [dispatch]);

  const clearEventRecycle = useCallback(() => {
    dispatch(recycleClear());
  }, [dispatch]);

  // rewrite 기능을 포함
  const onClick = (id: string) => {
    router.push(
      {
        pathname: `/user/${id}`,
        query: {
          id,
          text: "테스트 텍스트",
        },
      },
      `/user/${id}`,
    );
  };

  return (
    <div>
      <Title text="유저" />
      <Name />
      <div css={skyBlud}>
        <button type="button" onClick={() => onClick("1")}>
          id 1로 이동
        </button>
      </div>
      {/* 태그에 css 속성을 추가하기 위해서 최상단 코드 필요 */}
      <div css={skyBlud}>
        <h1>유저 화면</h1>
      </div>
      <div className={style.home}>
        <h1>일회용 데이터</h1>
        <div className={style.counter__text}>{disposable}</div>
        <div className={style.button__area}>
          <button type="button" onClick={upEventDispo}>
            UP
          </button>
          <button type="button" onClick={downEventDispo}>
            DOWN
          </button>
        </div>
        <h1>재사용 데이터</h1>
        <div className={style.counter__text}>{recycle}</div>
        <div className={style.button__area}>
          <button className="up-type" type="button" onClick={upEventRecycle}>
            UP
          </button>
          <button type="button" onClick={downEventRecycle}>
            DOWN
          </button>
          <button type="button" onClick={clearEventRecycle}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
