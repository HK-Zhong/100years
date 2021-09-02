import * as Antd from "antd";
import sec40 from "./sec40.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>庆祝中国共产党成立八十周年大会成功举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   中共中央在人民大会堂隆重举行庆祝中国共产党成立八十周年大会。江泽民在大会上发表重要讲话。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec40} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
