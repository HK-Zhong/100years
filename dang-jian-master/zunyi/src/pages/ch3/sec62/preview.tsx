import * as Antd from "antd";
import sec62 from "./sec62.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>神舟八号与天宫一号成功交会对接</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  11月1日  我国自行研制的神舟八号飞船，在酒泉卫星发射中心发射升空，583秒后成功进入预定轨道。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec62} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
