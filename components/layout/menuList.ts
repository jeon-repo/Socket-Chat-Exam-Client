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
    id: "chat",
    title: "채팅",
    url: "/chat",
  },
];
