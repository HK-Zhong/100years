import * as Antd from "antd";
import sec24 from "./sec24.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>四届全国人大一次会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  1990年以四届人大重申了三届人大政府工作报告提出的“两步设想”。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec24} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
