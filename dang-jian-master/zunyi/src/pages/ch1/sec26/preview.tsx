import * as Antd from "antd";
import sec26 from "./sec26.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>提出科教兴国的战略</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   1995年5月，江泽民同志在全国科技大会上的讲话中提出了实施科教兴国的战略，确立科技和教育是兴国的手段和基础的方针。5月26日至30日，中共中央、国务院在北京召开全国科学技术大会。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec26} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
