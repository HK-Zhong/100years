import * as Antd from "antd";
import sec29 from "./sec29.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>青藏铁路顺利通车</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec29} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2006年7月1日，青藏铁路顺利通车。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
