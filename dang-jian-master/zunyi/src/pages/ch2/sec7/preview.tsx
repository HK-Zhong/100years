import * as Antd from "antd";
import sec7 from "./sec7.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>周恩来提出和平共处五项原则</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec7} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1953年12月31日周恩来总理在接见印度政府代表团时，首次完整地提出了和平共处五项原则。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
