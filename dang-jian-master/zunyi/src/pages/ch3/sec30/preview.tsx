import * as Antd from "antd";
import sec30 from "./sec30.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>香港回归</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   ６月３０日午夜－７月１日凌晨　中英两国政府香港政权交接的仪式在香港隆重举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec30} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
