import * as Antd from "antd";
import sec16 from "./sec16.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国和葡萄牙两国政府关于澳门问题的联合声明在北京草签</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>    3月26日，中国和葡萄牙两国政府关于澳门问题的联合声明在北京草签。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec16} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
