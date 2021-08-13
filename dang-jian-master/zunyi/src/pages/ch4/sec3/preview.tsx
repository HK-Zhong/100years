import * as Antd from "antd";
import sec3 from "./sec3.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>神舟九号载人飞船成功发射</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec3} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2012年6月16日18时56分，神舟九号载人飞船成功发射。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
