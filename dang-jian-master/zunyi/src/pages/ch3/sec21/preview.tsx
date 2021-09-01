import * as Antd from "antd";
import sec21 from "./sec21.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>秦山核电站并网发电</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>12月15日，我国第一座自行设计、自行建造的核电站―秦山核电站并网发电。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec21} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
