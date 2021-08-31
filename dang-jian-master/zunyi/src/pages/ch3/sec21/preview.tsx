import * as Antd from "antd";
import sec21 from "./sec21.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国人民解放军建军90周年阅兵</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>7月30日，庆祝中国人民解放军建军90周年阅兵在朱日和联合训练基地举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec21} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
