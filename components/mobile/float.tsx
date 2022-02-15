import { useEffect } from "react";
import { useSelector, useStore } from "react-redux";

import { RootState } from "@store/reducers";
import dataSet from "@util/common/canvas-data.json";

// 임시 데이터 호출
const locData = JSON.parse(JSON.stringify(dataSet));

// 렌더링 최적화를 위해 변동값을 부모 컴포넌트에서 분리
function Float() {
  const store = useStore();
  const { isView } = useSelector((state: RootState) => state.isView);

  useEffect(() => {
    console.log("float -> ", isView, store.getState().isView);
    const float = document.getElementById("float");
    if (float) {
      if (isView) {
        float.style.display = "block";
      } else {
        float.style.display = "none";
      }
    }
  }, [isView]);

  return (
    <div id="float">
      {locData.map(
        (data: {
          id: string;
          top: number;
          left: number;
          height: number;
          width: number;
        }) => (
          <div
            key={data.id}
            style={{
              position: "absolute",
              top: `${data.top}px`,
              left: `${data.left}px`,
              height: `${data.height}px`,
              width: `${data.width}px`,
              border: "2.5px solid #93e8c8",
            }}
          ></div>
        ),
      )}
    </div>
  );
}

export default Float;
