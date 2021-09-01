import * as Antd from "antd";
import sec7 from "./sec7.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>汕头经济特区批准成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec7} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p> 1981年，经国务院批准，在市区龙湖片区试办经济特区。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
