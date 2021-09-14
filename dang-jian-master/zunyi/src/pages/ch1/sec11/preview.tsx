import * as Antd from "antd";
import sec11 from "./sec11.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>毛泽东和湖南省委领导湘赣边界秋收起义</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  毛泽东和湖南省委领导湘赣边界秋收起义。参加起义的主力有原国民革命军第四集团军第二方面军总指挥部警卫团，湖南平江、浏阳的农军，湖北崇阳、通城的部分农民军和安源的工人武装等。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec11} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
