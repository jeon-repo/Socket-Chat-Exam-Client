type MenuList = {
  id: string | undefined;
  title: string;
  url: string | "";
};

export const menuList: MenuList[] = [
  {
    id: "home",
    title: "홈",
    url: "/",
  },
  {
    id: "user",
    title: "유저",
    url: "/user",
  },
  {
    id: "mobile",
    title: "모바일",
    url: "/mobile",
  },
  {
    id: "test-capture",
    title: "테스트 캡처",
    url: "/test-capture",
  },
];
