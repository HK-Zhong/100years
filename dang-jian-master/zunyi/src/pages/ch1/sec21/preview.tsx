import * as Antd from "antd";
import sec21 from "./sec21_1.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>申奥成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec21} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2001年7月13日，申奥成功。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
