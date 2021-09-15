import * as Antd from "antd";
import sec4 from "./sec4.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>西藏和平解放</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec4} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p> 中央人民政府和西藏地方政府在北京签订《关于和平解放西藏办法的协议》（“十七条协议”），宣告西藏和平解放。10月26日，人民解放军进藏部队进驻拉萨。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
