import * as Antd from "antd";
import sec7 from "./sec7.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>蒋介石制造中山舰事件</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec7} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>蒋介石制造中山舰事件。他在广州实行紧急戒严，逮捕海军局代局长、共产党员李之龙，监视和软禁大批共产党人，解除省港罢工委员会的工人纠察队的武装，包围苏联领事馆，监视苏联顾问。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
