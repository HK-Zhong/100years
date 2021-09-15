import * as Antd from "antd";
import sec5 from "./sec5.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《中华人民共和国民族区域自治实施纲要》公布施行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec5} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p> 8月9日，《中华人民共和国民族区域自治实施纲要》公布施行，对民族自治地方的建立、自治机关的组成和自治权利等重要问题作出明确规定。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
