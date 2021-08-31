import * as Antd from "antd";
import sec32 from "./sec32.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>神舟十二号载人飞船发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>神舟十二号载人飞船发射升空，与天和核心舱完成自主快速交会对接。三名航天员先后进入天和核心舱，标志着中国人首次进入自己的空间站。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec32} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
