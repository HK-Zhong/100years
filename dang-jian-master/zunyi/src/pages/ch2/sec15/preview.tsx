import * as Antd from "antd";
import sec15 from "./sec15.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>毛泽东在河南郑州召集中央工作会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>中共中央于1958年11月2日至10日在郑州召开了有部分中央领导人、大区负责人和部分省、市委第一书记参加的工作会议，即第一次郑州会议。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec15} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
