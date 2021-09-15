import * as Antd from "antd";
import sec18 from "./sec18.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央召开扩大的中央工作会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  扩大的中央工作会议于1962年1月11日至2月7日在北京举行。参加会议的有中央各部门、各中央局、各省市自治区党委以及地委、县委、重要工矿企业和部队的负责干部，共7000多人，故称七千人大会。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec18} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
