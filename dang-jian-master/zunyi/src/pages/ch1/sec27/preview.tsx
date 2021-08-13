import * as Antd from "antd";
import sec27 from "./sec27.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《反分裂国家法》通过</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec27} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2005年3月14日，《反分裂国家法》通过。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
