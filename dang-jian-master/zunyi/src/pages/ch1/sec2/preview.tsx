import * as Antd from "antd";
import sec2 from "./sec2.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>对越自卫反击战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec2} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1979年2月17日—3月16日期间在中国和越南之间的战争。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
