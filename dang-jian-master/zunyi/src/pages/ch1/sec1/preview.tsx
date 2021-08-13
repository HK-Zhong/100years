import * as Antd from "antd";
import sec1 from "./sec1.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十一届三中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>1978年12月18日—22日,
          中共十一届三中全会在北京举行</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec1} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
