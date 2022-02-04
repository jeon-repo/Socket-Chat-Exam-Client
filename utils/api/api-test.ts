import axios from "axios";

export function callTestApi() {
  if (process.env.NODE_ENV === "development") {
    axios({
      method: "get",
      url: process.env.NEXT_PUBLIC_TEST_API,
    }).then((res) => {
      console.log(res.data);
    });
  }
}
