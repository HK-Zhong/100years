import * as Antd from "antd";
import sec35 from "./sec35.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>我国第一艘载人航天试验飞船发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   1999年11月20日6时30分，我国第一艘载人航天试验飞船在酒泉卫星发射中心航天发射场发射升空。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec35} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
