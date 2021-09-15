import * as Antd from "antd";
import sec13 from "./sec13.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央发出《关于整风运动的指示》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>以正确处理人民内部矛盾为主题，以反对官僚主义、宗派主义和主观主义为主要内容的整风运动全面展开。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec13} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
