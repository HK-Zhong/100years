import * as Antd from "antd";
import sec44 from "./sec44.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国正式成为WTO成员</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   世界贸易组织（WTO）第四届部长级会议审议并通过关于中国加入世界贸易组织的决定。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec44} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
