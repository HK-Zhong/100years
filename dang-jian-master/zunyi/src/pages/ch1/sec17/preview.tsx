import * as Antd from "antd";
import sec17 from "./sec17.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>香港回归</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec17} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1997年7月1日，香港回归。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
