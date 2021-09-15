import * as Antd from "antd";
import sec28 from "./sec28.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>抗日战争由战略防御转入战略相持阶段</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  在战略防御阶段，八路军、新四军同日、伪军作战1600余次，毙伤俘敌5.4万余人，八路军发展到15.6万余人，新四军发展到2.5万人，抗日根据地（包括游击区）总人口达5000万以上。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec28} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
