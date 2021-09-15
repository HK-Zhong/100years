import * as Antd from "antd";
import sec30 from "./sec30.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>生产动员大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p> 为克服经济上的严重困难，中共中央在延安召开生产动员大会，毛泽东发出“自己动手”的号召。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec30} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
