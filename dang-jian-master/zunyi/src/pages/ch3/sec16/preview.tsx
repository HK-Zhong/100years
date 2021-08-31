import * as Antd from "antd";
import sec16 from "./sec16.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>纪念中国人民抗日战争暨世界反法西斯战争胜利70周年大会在北京天安门广场举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>9月3日，纪念中国人民抗日战争暨世界反法西斯战争胜利70周年大会在北京天安门广场举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec16} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
