import * as Antd from "antd";
import sec59 from "./sec59.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>青海玉树发生里氏7.1级地震</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  青海玉树发生里氏7．1级地震，造成2698人遇难，270人失踪。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec59} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
