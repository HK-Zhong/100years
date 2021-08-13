import * as Antd from "antd";
import React from "react";
import { IRouteComponentProps } from "umi";
import Welcome from "./welcome";
import bg_gif from "./dangqi.gif";

// 封面组件
export default class Cover extends React.Component<IRouteComponentProps> {
  state = { showCurtain: true };

  render() {
    return (
      <>
        <Welcome />
        <Antd.Drawer
          closable={false}
          visible={this.state.showCurtain}
          placement="top"
          height="95%"
          bodyStyle={{
            // backgroundColor: "#e82b05",
            backgroundImage: `url(${bg_gif})`,
            backgroundSize: "100% 100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Antd.Typography.Title style={{ fontSize: 60 }}>
            百年党史教育展览馆
          </Antd.Typography.Title>
          <Antd.Button
            onClick={() => {
              this.setState({ showCurtain: false });
            }}
            type="primary"
          >
            进入
          </Antd.Button>
        </Antd.Drawer>
      </>
    );
  }
}
