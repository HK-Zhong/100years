import * as Antd from "antd";
import sec21 from "./sec21.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国第一颗人造地球卫星发射成功</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>1970年4月24日，我国自行设计、制造的第一颗人造地球卫星“东方红”一号，由“长征”一号运载火箭一次发射成功。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec21} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
