import * as Antd from "antd";
import sec16 from "./sec16.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十四届三中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec16} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1993年11月11日—14日，中共十四届三中全会在京举行。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
