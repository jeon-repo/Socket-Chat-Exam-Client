import axios from "axios";

export function callTestApi(): any {
  if (process.env.NODE_ENV === "production") {
    // axios는 Promise 객체를 사용하여 비동기 http 통신
    return axios({
      method: "get",
      url: process.env.NEXT_PUBLIC_TEST_API,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { result: err };
      });
  }
  return { result: "200 완료" };
}
