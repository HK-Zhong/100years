import * as Antd from "antd";
import sec34 from "./sec34.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国首艘航母“辽宁舰”交付使用</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec34} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2012年9月25日，我国第一艘航母“辽宁舰”正式交付海军。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
