import * as Antd from "antd";
import sec20 from "./sec20.png"

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>西渡黄河准备执行宁夏战役计划</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>10月下旬，为打通苏联援助的道路，红四方面军一部奉中革军委命令，西渡黄河准备执行宁夏战役计划。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec20} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
