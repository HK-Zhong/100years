import * as Antd from "antd";
import sec13 from "./sec13.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>海南经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec13} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1988年4月13日，海南经济特区正式建立。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
