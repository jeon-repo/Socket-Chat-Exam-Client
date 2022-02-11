/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import style from "@style/Test.module.css";

import { RootState } from "@store/reducers";
import { disposableDown, disposableUp } from "@store/actons/disposable";
import { recycleClear, recycleDown, recycleUp } from "@store/actons/recycle";
import Name from "@component/name";

// 컴포넌트 고유로 적용되는 css는 아래처럼 emotion을 통해 작성
const skyBlud = css`
  background-color: skyblue;
`;

function User() {
  const dispatch = useDispatch();
  const { disposable } = useSelector((state: RootState) => state.disposable);
  const { recycle } = useSelector((state: RootState) => state.recycle);

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

  return (
    <div>
      <Name />
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
