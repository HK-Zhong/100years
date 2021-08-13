import * as Antd from "antd";
import sec9 from "./sec9.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>习近平在京主持召开文艺工作座谈会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec9} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2013年10月15日上午，习近平在京主持召开文艺工作座谈会并发表重要讲话。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
