import * as Antd from "antd";
import sec34 from "./sec34.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>庆祝建国50周年大会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   首都各界庆祝中华人民共和国成立五十周年大会在天安门广场举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec34} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
