import * as Antd from "antd";
import sec19 from "./sec19.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>庆祝中国共产党成立95周年大会在京举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>7月1日庆祝中国共产党成立95周年大会举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec19} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
