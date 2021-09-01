import * as Antd from "antd";
import sec12 from "./sec12.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>沿海部分城市座谈会在北京召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>3月26日－4月6日，中共中央书记处和国务院在北京召开沿海部分城市座谈会。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec12} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
