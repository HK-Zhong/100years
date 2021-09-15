import * as Antd from "antd";
import sec14 from "./sec14.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共八大二次会议召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>中共八大二次会议于1958年5月5日至23日在在北京举行。大会正式提出“鼓足干劲、力争上游、多快好省地建设社会主义”的总路线。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec14} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
