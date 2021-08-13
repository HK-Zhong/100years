import "@amap/amap-jsapi-types";
import * as Antd from "antd";
import { SliderMarks } from "antd/lib/slider";
import React from "react";
import ReactDOM from "react-dom";
import { longMarch } from "./long-march";

const menuItems: React.ReactNode[] = [];
const stageContents: HTMLDivElement[][] = [];
for (let i = 0; i < longMarch.length; ++i) {
  // 添加菜单项
  menuItems.push(<Antd.Menu.Item key={i}>stage {i}</Antd.Menu.Item>);

  // 预渲染路径点内容，ReactNode -> DOM。
  const stageContent: HTMLDivElement[] = [];
  for (let item of longMarch[i]) {
    const div = document.createElement("div");
    ReactDOM.render(
      <Antd.Card title={item.title} size="small">
        {item.content}
      </Antd.Card>,
      div
    );
    stageContent.push(div);
  }
  stageContents.push(stageContent);
}

export default class App extends React.Component {
  map: AMap.Map | null = null;
  state = {
    stageNo: 0,
  };

  render() {
    const stage = longMarch[this.state.stageNo];

    const begin = stage[0];
    const end = stage[stage.length - 1];

    const marks: SliderMarks = {};
    for (let i of stage) {
      marks[i.date.getTime()] = i.title;
    }

    return (
      <Antd.Layout
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Antd.Layout.Header>
          <h1 style={{ color: "grey", textAlign: "center" }}>THE LONG MARCH</h1>
        </Antd.Layout.Header>

        <Antd.Layout.Content
          style={{
            flex: 1,
            margin: "50px 50px 0px 50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Antd.Menu
            mode="horizontal"
            selectedKeys={[String(this.state.stageNo)]}
            onClick={({ key }) => this.setState({ stageNo: key })}
          >
            {menuItems}
          </Antd.Menu>

          <Antd.Divider style={{ margin: "5px" }} />
          <div id="container" style={{ flex: 1 }} />

          <Antd.Slider
            min={begin.date.getTime()}
            max={end.date.getTime()}
            marks={marks}
            tipFormatter={(value) => {
              return new Date(value!).toDateString();
            }}
            onChange={(value: number) => {
              this.renderMap(value); //! 页面切换时有BUG？
            }}
          />
        </Antd.Layout.Content>

        <Antd.Layout.Footer style={{ textAlign: "center" }}>
          ©2021 by GuYuhao
        </Antd.Layout.Footer>
      </Antd.Layout>
    );
  }

  renderMap(time: number | null = null) {
    const map = this.map!;
    map.clearMap();

    const stage = longMarch[this.state.stageNo];
    const path: AMap.LngLat[] = [stage[0].position];
    if (time === null) {
      time = stage[0].date.getTime();
    }

    for (let i = 0; i < stage.length; ++i) {
      const item = stage[i];
      if (item.date.getTime() <= time) {
        // 添加路径点
        path.push(item.position);

        // 显示里程碑
        const infoWindow = new AMap.InfoWindow({
          content: stageContents[this.state.stageNo][i],
        });
        infoWindow.open(map, [item.position.lng, item.position.lat], 0);
      } else {
        // 线性插值以绘制路径
        const previousItem = stage[i - 1];
        let dLng = item.position.lng - previousItem.position.lng;
        let dLat = item.position.lat - previousItem.position.lat;
        let frac =
          (time - previousItem.date.getTime()) /
          (item.date.getTime() - previousItem.date.getTime());
        path.push(
          new AMap.LngLat(
            previousItem.position.lng + dLng * frac,
            previousItem.position.lat + dLat * frac
          )
        );
        break;
      }
    }

    map.add(
      new AMap.Polyline({
        path: path,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: "red", // 线条颜色
        lineJoin: "round", // 折线拐点连接处样式
      })
    );
  }

  componentDidMount() {
    this.map = new AMap.Map("container");
    this.renderMap();
  }

  componentDidUpdate() {
    this.renderMap();
  }
}
