import * as Antd from "antd";
import sec37 from "./sec37.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共扩大的六届七中全会在延安召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   六届七中全会于1944年5月21日至1945年4月20日在延安杨家岭举行。出席会议的中央委员和候补中央委员17人。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec37} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
