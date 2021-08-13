import * as Antd from "antd";
import sec6 from "@/pages/ch1/sec6/sec6_1.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>深圳、珠海经济特区建立</Antd.Typography.Title>
    <Antd.Typography.Text>
        <div style={{float:"left"}}>
          <img src={sec6} style={{width:"100px" ,height:"60px"}}/>
        </div>
        <div style={{float:"right"}}>
          <p>深圳、珠海经济特区于1980年8月正式成立。</p>
        </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
