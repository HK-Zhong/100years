import * as Antd from "antd";
import sec5 from "@/pages/ch1/sec5/sec5.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十一届五中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec5} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1980年2月23日—29日,中共十一届五中全会在北京举行。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
