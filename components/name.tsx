import { callTestApi } from "@api/api-test";
import { changedWord } from "@util/common/constant";
import { useState, useEffect } from "react";

function Name() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(process.env.NEXT_PUBLIC_TEST_WORD);
  const [apiData, setApiData] = useState({ result: "init-state" });

  useEffect(() => {
    console.log("2 -> ", data, apiData);
    // console.log("2 -> ", data, apiData.result);
  }, [data, apiData]);

  // Promise 객체의 result를 받기 위해서
  // await를 통해 데이터를 전달받음
  async function changeData() {
    setApiData(await callTestApi());
  }

  if (loading) {
    setLoading(false);
    console.log("1 -> ", data, apiData);
    changeData();
    setData(changedWord);
  }

  return (
    <div>
      <h2>네임</h2>
      <style jsx>
        {`
          h2 {
            background-color: pink;
          }
        `}
      </style>
    </div>
  );
}

export default Name;
