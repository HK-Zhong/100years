import * as Antd from "antd";
import sec47 from "./sec47.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>非典事件</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   SARS于2002年在中国广东发生，并扩散至东南亚乃至全球，2003年疫情传染流行，直至2003年中期疫情才被逐渐消灭。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec47} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
