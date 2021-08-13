import * as antd from "antd";
import { IRouteComponentProps } from "umi";
import working_png from "./working.png";

export default (props: IRouteComponentProps) => {
  return (
    <antd.Typography style={{ textAlign: "center" }}>
      <img src={working_png} style={{ width: 500, height: 500 }} />
      <antd.Typography.Title>第四章正在建设中……</antd.Typography.Title>
    </antd.Typography>
  );
};
