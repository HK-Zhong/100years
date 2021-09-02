import * as Antd from "antd";
import sec53 from "./sec53.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>嫦娥一号发射升空</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   我国在西昌卫星发射中心用长征三号甲运载火箭将嫦娥一号卫星成功送入太空。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec53} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
