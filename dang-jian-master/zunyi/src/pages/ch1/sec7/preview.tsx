import * as Antd from "antd";
import sec7 from "./sec7.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>厦门经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec7} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p> 厦门经济特区于1980年10月批准设立。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
