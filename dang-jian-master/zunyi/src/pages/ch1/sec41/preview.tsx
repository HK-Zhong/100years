import * as Antd from "antd";
import sec41 from "./sec41.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>北京申办2008年奥运会成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   当北京申办2008年奥运成功的消息传来，聚集在中华世纪坛和自发来到天门广场的各界群众爆发出排山倒海般的欢呼。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec41} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
