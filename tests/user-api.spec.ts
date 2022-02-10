import { test, expect } from "@playwright/test";

test("api success test", async ({ request }) => {
  const apiResponse = await request.get("http://localhost:8000/api/test");
  expect(apiResponse.status()).toBe(200);
  const body = JSON.parse(await apiResponse.text());
  console.log("99 -> ", body);
  // expect의 param이 일반 데이터 -> jest doc 참조
  // expect의 param이 locator 데이터 -> playwright doc 참조
  // 예측 성공
  await expect(body.result).toContain("flask server");
  await expect(body.result).toEqual("flask server");
  
  // 예측 실패
  // await expect(body.result).toContainEqual("flask server".toString());
  // await expect(body.result).toContainText("flask server".toString());
});
