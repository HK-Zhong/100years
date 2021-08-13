import * as Antd from "antd";
import sec9 from "./sec9.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>汕头经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec9} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>汕头经济特区于1981年11月正式成立。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
