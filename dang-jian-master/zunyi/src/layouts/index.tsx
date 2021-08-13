import { Layout, Menu } from "antd";
import React from "react";
import { history, IRouteComponentProps } from "umi";
import catalog from "../pages/catalog";
import bg_mp3 from "./bg2.mp3";
import styles from "./index.less";

const { Header, Content, Footer, Sider } = Layout;

// // 音乐渐出效果
// const fade = (volume = 1) => {
//   const audio = this.audioRef.current!;
//   if (volume <= 0) return audio.pause();
//   audio.volume = volume;
//   setTimeout(() => fade(volume - 0.01), 5);
// };
// fade();

export default (props: IRouteComponentProps) => {
  const selectedKeys: string[] = [];
  const url = props.match.url;

  // 将 url 的每级都算入 selectedKeys 中
  let i = 0;
  let j = url.indexOf("/");
  while (j !== -1) {
    selectedKeys.push(url.substr(0, j));
    i = j;
    j = url.indexOf("/", j + 1);
  }
  selectedKeys.push(url.substr(i));

  return (
    <Layout
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflowY: "hidden",
      }}
    >
      <Header className={styles.header}>学党史　悟思想　办实事　开新局</Header>
      <Content
        className={styles.content}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Layout style={{ overflowY: "hidden" }}>
          <Sider
            width={200}
            style={{
              marginRight: 24,
              overflow: "auto",
            }}
          >
            <Menu
              mode="inline"
              selectedKeys={selectedKeys}
              style={{ height: "100%" }}
              onClick={({ key }) => history.push(key as string)}
            >
              {catalog}
            </Menu>
          </Sider>
          <Content style={{ padding: 10, height: "100%" }}>
            {props.children}
          </Content>
        </Layout>
      </Content>
      <Footer className={styles.footer}>
        ©2021 苏州大学 计算机科学与技术学院
      </Footer>
      <audio
        src={bg_mp3}
        controls
        autoPlay
        style={{
          position: "absolute",
          marginTop: 10,
          right: 10,
          bottom: 10,
          float: "right",
        }}
      />
    </Layout>
  );
};
