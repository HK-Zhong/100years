import * as Antd from "antd";
import sec4 from "@/pages/ch1/sec4/sec4.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>邓小平提出“小康”的概念</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec4} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1979年12月6日,邓小平在会见日本首相大平正芳时提出“小康”的概念。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
