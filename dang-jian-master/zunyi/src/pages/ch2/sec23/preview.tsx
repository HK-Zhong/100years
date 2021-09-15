import * as Antd from "antd";
import sec23 from "./sec23.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>田中角荣应邀访问中国</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>田中角荣访华，从上世纪60年代中期开始，日本开始推行全方位“经济外交”。为此日本提出以积极推行亚洲自主外交为基础，解决冲绳、日韩和日中问题。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec23} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
