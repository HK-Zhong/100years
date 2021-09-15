import * as Antd from "antd";
import sec29 from "./sec29.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央南方局在重庆成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  中共中央南方局在重庆成立。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec29} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
