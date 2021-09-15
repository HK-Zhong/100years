import * as Antd from "antd";
import sec17 from "./sec17.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共八届九中全会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  八届九中全会于1961年1月14日至18日在北京召开。出席会议的有中央委员83人，候补中央委员87人，另有中央有关部门和省、市、自治区党委的负责同志23人列席了会议。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec17} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
