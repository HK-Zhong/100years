import * as Antd from "antd";
import sec11 from "./sec11.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十三大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec11} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1987年10月25日—11月1日，中国共产党第十三次全国代表大会在北京举行。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
