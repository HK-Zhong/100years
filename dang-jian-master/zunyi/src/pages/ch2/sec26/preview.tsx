import * as Antd from "antd";
import sec26 from "./sec26.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>毛泽东逝世</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   18日，首都百万群众在天安门广场隆重举行追悼大会。全国各省、自治区、直辖市举行了悼念活动。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec26} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
