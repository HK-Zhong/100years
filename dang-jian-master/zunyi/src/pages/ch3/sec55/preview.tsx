import * as Antd from "antd";
import sec55 from "./sec55.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>北京成功举办奥运会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   北京成功举办第二十九届奥运会、第十三届残奥会。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec55} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
