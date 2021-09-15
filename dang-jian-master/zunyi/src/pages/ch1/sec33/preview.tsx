import * as Antd from "antd";
import sec33 from "./sec33.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>华中新四军八路军总指挥部在海安成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   华中新四军八路军总指挥部在苏中海安成立，叶挺任总指挥，刘少奇任政治委员，陈毅任副总指挥（在叶挺抵达前代理总指挥）。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec33} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
