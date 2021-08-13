import * as Antd from "antd";
import sec19 from "./sec19.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>澳门回归</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec19} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1999年9月12日—18日，12月20日中国政府恢复对澳门行使主权。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
