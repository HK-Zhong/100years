import * as Antd from "antd";
import sec4 from "./sec4.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>习近平：厉行勤俭节约，反对铺张浪费</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec4} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2013年1月17日，习近平在新华社《网民呼吁遏制餐饮环节“舌尖上的浪费”》材料上作出批示。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
