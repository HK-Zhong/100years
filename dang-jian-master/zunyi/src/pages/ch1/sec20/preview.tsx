import * as Antd from "antd";
import sec20 from "./sec20.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十五届五中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec20} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>2000年10月9日—11日，中共十五届五中全会在北京举行。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
