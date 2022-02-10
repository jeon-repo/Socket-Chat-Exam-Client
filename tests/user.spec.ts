import { test, expect, request } from "@playwright/test";
import { timeout } from "../utils/common/timeout";

test("first test", async ({ page }) => {
  await page.goto("http://localhost:3001");
  await page.click("text=유저 화면으로 이동");
  await expect(page).toHaveURL("http://localhost:3001/user");
  await expect(page.locator("h2")).toContainText("네임");
});

test("second test", async ({ page }) => {
  await page.goto("http://localhost:3001");
  await page.click("text=유저 화면으로 이동", timeout(10));
  await expect(page).toHaveURL("http://localhost:3001/user");
  await page.click("text=UP");
  for (let i in Array(99).fill(1)) {
    await page.click("text=UP");
  }
  // 클릭으로 텍스트가 2가 되었는지 xpath를 통해 확인
  await expect(page.locator('//*[@id="__next"]/div/div[3]/div[1]')).toHaveText(
    "100",
  );
  await page.locator('//*[@id="__next"]/div/div[3]/div[3]');
});

async function apiTest() {
  const context = await request.newContext({
    baseURL: "http://localhost:8000",
  });
  return context.get("/api/test").then((res) => {
    console.log("1 -> ", res);
    console.log("2 -> ", res.json());
    console.log("3 -> ", res.ok());
    console.log("4 -> ", res.body());
    console.log("5 -> ", res.text());
    console.log("6 -> ", res.url());
    return res;
  });
}
