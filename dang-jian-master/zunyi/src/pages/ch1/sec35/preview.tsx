import * as Antd from "antd";
import sec35 from "./sec35.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title>中共十八大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec35} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>中国共产党第十八次全国代表大会于2012年11月8日在北京召开。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
