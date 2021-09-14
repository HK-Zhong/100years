import * as Antd from "antd";
import sec10 from "./sec10.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央在湖北汉口召开紧急会议（八七会议）</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec10} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>    在共产国际的帮助下，中共中央在湖北汉口召开紧急会议（即八七会议）。出席会议的有部分中央委员、中央候补委员、中央监委，还有中央军委、共青团中央、湖南、湖北的代表和负责人。共产国际代表罗米那兹和中央秘书处负责人等也参加了会议。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
