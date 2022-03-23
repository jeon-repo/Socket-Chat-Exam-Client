import Link from "next/link";
import { Layout, Menu, Breadcrumb } from "antd";
import style from "@style/layout.module.css";

import { menuList } from "@component/layout/menuList";

const { Header, Content, Footer } = Layout;

// function LayoutCus({ children }) {
function LayoutCus(props: any) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
          {menuList.map((menu) => {
            return (
              <Menu.Item key={menu.id}>
                <Link href={menu.url}>
                  <a>{menu.title}</a>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {/* <div className={style.site_layout_content}>{children}</div> */}
        <div className={style.site_layout_content}>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Copyright © Flexsys. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default LayoutCus;
