import * as Antd from "antd";
import sec31 from "./sec31.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>嫦娥一号在西昌卫星发射中心发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec31} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2007年10月24日，嫦娥一号在西昌卫星发射中心发射升空。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
