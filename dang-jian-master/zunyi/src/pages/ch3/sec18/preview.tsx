import * as Antd from "antd";
import sec18 from "./sec18.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十三届五中全会在北京召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>    11月6日－9日，中共十三届五中全会在北京召开。全会审议并通过了《中共中央关于进一步治理整顿和深化改革的决定》。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec18} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
