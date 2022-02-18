import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { offView, onView } from "@store/actions/isView";
import { RootState } from "@store/reducers";

// 렌더링 최적화를 위해 행위자(버튼)를 부모 컴포넌트에서 분리
function FBtn() {
  const dispatch = useDispatch();
  const { isView } = useSelector((state: RootState) => state.isView);
  const onIsView = useCallback(() => {
    dispatch(onView());
  }, [dispatch]);

  const offIsView = useCallback(() => {
    dispatch(offView());
  }, [dispatch]);
  const onClick = () => {
    if (isView) {
      offIsView();
    } else {
      onIsView();
    }
  };

  return (
    <button onClick={onClick} type="button">
      뷰 버튼
    </button>
  );
}

export default FBtn;
