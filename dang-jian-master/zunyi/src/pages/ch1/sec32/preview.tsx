import * as Antd from "antd";
import sec32 from "./sec32.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>成功举办2008年北京奥运会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec32} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2008年8月8日到24日及9月6日至17日，中国在北京成功举办了第29届奥运会和残奥会。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
