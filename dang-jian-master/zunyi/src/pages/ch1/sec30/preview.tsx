import * as Antd from "antd";
import sec30 from "./sec30.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十七大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec30} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2007年10月15日-21日中国共产党第十七次全国代表大会在北京召开。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
