import "@amap/amap-jsapi-types";
import * as AntdIcons from "@ant-design/icons";
import * as Antd from "antd";
import React from "react";
import ReactDOM from "react-dom";
import timeline from "./timeline";

// 整理时间线
timeline.sort((a, b) => a.date.getTime() - b.date.getTime());

export default class extends React.Component {
  state = {
    article: null as React.ReactNode,
  };

  map: AMap.Map = null as any;
  mapDivRef = React.createRef<HTMLDivElement>();
  timelineItems: React.ReactNode[] = [];

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div ref={this.mapDivRef} style={{ flex: "auto" }} />
        <Antd.Timeline mode="right" style={{ overflowY: "auto" }}>
          {this.timelineItems}
        </Antd.Timeline>
        <Antd.Modal
          visible={this.state.article !== null}
          onCancel={() => this.setState({ article: null })}
          title={null}
          footer={null}
          closeIcon={<AntdIcons.CloseSquareFilled style={{ fontSize: 30 }} />}
          width="60%"
        >
          {this.state.article}
        </Antd.Modal>
      </div>
    );
  }

  componentDidMount() {
    this.map = new AMap.Map(this.mapDivRef.current!, {
      center: [110, 38],
      zoom: 4,
      viewMode: "3D",
      layers: [
        // new AMap.TileLayer(),
        new AMap.TileLayer.Satellite(),
        new AMap.TileLayer.RoadNet(),
        new (AMap as any).Buildings(),
      ],
    });

    for (let i of timeline) {
      const locVec2: any = [i.location.lng, i.location.lat];

      // 事件信息窗
      const infoWindow = new AMap.InfoWindow();
      infoWindow.on("close", () => {
        this.map.setCenter([110, 38]);
        this.map.setZoom(4);
      });
      const popInfoWindow = () => {
        // 聚焦到位置
        infoWindow.open(this.map, locVec2, 0);
        this.map.setCenter(locVec2);
        this.map.setZoom(12);

        // 即时渲染内容
        const div = document.createElement("div");
        ReactDOM.render(
          <>
            {i.preview}
            <div style={{ textAlign: "right" }}>
              <Antd.Button
                onClick={() => this.setState({ article: i.article })}
                size="small"
                type="link"
                style={{ position: "relative", left: 18, top: 5 }}
              >
                阅读全文
              </Antd.Button>
            </div>
          </>,
          div,
        );
        infoWindow.setContent(div);
      };

      // 地图标记
      const marker = new AMap.Marker({ position: locVec2 });
      marker.on("click", popInfoWindow);
      this.map.add(marker);

      // 时间轴节点
      this.timelineItems.push(
        <Antd.Timeline.Item
          dot={i.timelineDot}
          color={i.timelineColor}
          // label={i.date.toDateString()}
        >
          {i.date.getFullYear() +
            "-" +
            (i.date.getMonth() + 1) +
            "-" +
            i.date.getDate()}
          <br />
          <Antd.Button type="text" onClick={popInfoWindow}>
            {i.timelineLabel}
          </Antd.Button>
        </Antd.Timeline.Item>,
      );
    }

    this.forceUpdate();
  }

  componentDidUpdate() {
    (this.map as any).resize();
  }

  componentWillUnmount() {
    this.map.destroy();
  }
}
