import * as Antd from "antd";
import sec2 from "./sec2.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>对越自卫反击战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec2} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>    1979年对越自卫还击战，中国达到了预期的作战目的，打乱了苏联一越南的战略部署，摧毁了越南北部的工矿业，对于保护中国国家主权和领土完整以及东南亚地区乃至世界的和平与稳定都有重要的意义。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
