import * as Antd from "antd";
import sec33 from "./sec33_1.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>成为世界第二大经济体</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec33} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2010年，中国GDP超过日本成为世界第二大经济体。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
