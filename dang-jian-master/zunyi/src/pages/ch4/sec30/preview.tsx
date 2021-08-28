import * as Antd from "antd";
import sec30 from "./sec30.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国人民志愿军抗美援朝出国作战70周年大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>习近平在纪念中国人民志愿军抗美援朝出国作战70周年大会上讲话指出，在波澜壮阔的抗美援朝战争中，英雄的中国人民志愿军锻造了伟大抗美援朝精神。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec30} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
