import * as Antd from "antd";
import sec6 from "./sec6.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>五卅惨案</Antd.Typography.Title>
    <Antd.Typography.Text>
        <div style={{float:"left"}}>
          <img src={sec6} style={{width:"100px" ,height:"60px"}}/>
        </div>
        <div style={{float:"right"}}>
          <p>上海学生及其他群众代表举行反帝游行、讲演，租界巡捕开枪镇压，酿成“五卅惨案”，</p>
        </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
