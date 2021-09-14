import * as Antd from "antd";
import sec4 from "./sec4.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国国民党在广州举行第一次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec4} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>在孙中山主持下，中国国民党在广州举行第一次全国代表大会。大会通过了有共产党人参加起草的、以反帝反封建为主要内容的宣言，确定了联俄、联共、扶助农工的三大政策，从而把旧三民主义发展为新三民主义。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
