import * as Antd from "antd";
import sec32 from "./sec32.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>百团大战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  百团大战，是抗日战争时期，八路军在华北敌后发动的一次大规模进攻和反“扫荡”的战役，由于参战兵力达105个团，故称“百团大战”。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec32} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
