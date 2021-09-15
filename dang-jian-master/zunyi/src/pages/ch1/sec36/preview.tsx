import * as Antd from "antd";
import sec36 from "./sec36.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>河南地区抗日根据地建立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   在豫湘桂正面战场出现国民党军队大溃退的情况下，中共中央发出指示，要求在河南地区组织抗日游击队和人民武装，建立抗日根据地。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec36} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
