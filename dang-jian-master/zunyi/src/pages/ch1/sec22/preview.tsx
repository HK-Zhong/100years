import * as Antd from "antd";
import sec22 from "./sec22.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国加入世界贸易组织</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec22} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2001年11月10日，中国加入世界贸易组织。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
