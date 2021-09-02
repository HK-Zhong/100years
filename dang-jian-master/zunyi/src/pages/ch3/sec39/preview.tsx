import * as Antd from "antd";
import sec39 from "./sec39.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>“上海合作组织”成员国元首会议在上海举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   “上海合作组织”成员国元首会议在上海举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec39} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
