import * as Antd from "antd";
import sec42 from "./sec42.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>庆祝西藏和平解放50周年大会在拉萨举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   庆祝西藏和平解放50周年大会于2001年7月19日在拉萨举行。中共中央、全国人大常委会、国务院、全国政协、中央军委发来贺电。胡锦涛出席大会并讲话。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec42} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
