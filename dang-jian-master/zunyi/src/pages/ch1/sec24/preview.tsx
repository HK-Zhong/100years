import * as Antd from "antd";
import sec24 from "./sec24.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十六大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec24} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2002年11月8日—14日，中国共产党第十六次全国代表大会在北京召开。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
