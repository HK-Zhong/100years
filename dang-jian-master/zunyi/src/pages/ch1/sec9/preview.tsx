import * as Antd from "antd";
import sec9 from "./sec9.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>南昌起义</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec9} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>根据中共中央的决定，在周恩来为书记的中共前敌委员会和贺龙、叶挺、朱德、刘伯承等领导下，党所掌握和影响的国民革命军等武装两万余人，在南昌举行武装起义，占领了南昌。这次起义打响了武装反抗国民党反动派的第一枪，标志着中国共产党独立地领导革命战争、创建人民军队和武装夺取政权的开始。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
