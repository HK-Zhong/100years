import * as Antd from "antd";
import sec25 from "./sec25.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>南水北调工程正式开工</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec25} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2002年12月27日，南水北调工程正式开工。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
