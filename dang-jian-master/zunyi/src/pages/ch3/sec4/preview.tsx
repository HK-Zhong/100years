import * as Antd from "antd";
import sec4 from "./sec4.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《关于为刘少奇同志平反的决议》通过</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec4} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2月23日到2月29日，中共十一届五中全会在北京举行。会议的主要议题是加强和改善党的领导。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
