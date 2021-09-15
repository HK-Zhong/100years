import * as Antd from "antd";
import sec3 from "./sec3.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央作出抗美援朝、保家卫国的战略决策</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec3} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>10月8日，毛泽东发布命令，组成中国人民志愿军，彭德怀为司令员兼政治委员。19日，中国人民志愿军进入朝鲜战场。25日，志愿军与敌军遭遇，打响出国作战的第一次战役。全国掀起大规模抗美援朝运动。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
