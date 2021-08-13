import * as Antd from "antd";
import sec1 from "./sec1.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第十八次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>2012年11月8日至14日，中国共产党第十八次全国代表大会在北京召开。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec1} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
