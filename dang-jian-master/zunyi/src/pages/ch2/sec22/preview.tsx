import * as Antd from "antd";
import sec22 from "./sec22.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>卢沟桥事变</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>1937年7月7日，日本帝国主义为发动全面侵华战争在卢沟桥制造的武装挑衅事件，亦称“七七事变”。九一八事变后，日本帝国主义侵占中国东北，并逐步把侵华势力扩张到平津附近。为加快对中国的侵略，1936年日本军部制定了1937年大规模侵略中国的作战计划。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec22} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
