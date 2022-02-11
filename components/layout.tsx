import { Layout, Menu, Breadcrumb } from "antd";
import style from "@style/layout.module.css";

const { Header, Content, Footer } = Layout;

function LayoutCus(props: any) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={style.site_layout_content}>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Copyright © Flexsys. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default LayoutCus;
