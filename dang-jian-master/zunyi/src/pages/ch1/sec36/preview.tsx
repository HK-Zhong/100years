import * as Antd from "antd";
import sec36 from "./sec36.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>澳门回归</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   １２月２０日，中葡两国政府澳门政权交接仪式隆重举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec36} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
