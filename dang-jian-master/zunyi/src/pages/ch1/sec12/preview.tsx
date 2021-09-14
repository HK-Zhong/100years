import * as Antd from "antd";
import sec12 from "./sec12.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>井冈山会师</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>毛泽东率领的秋收起义部队，和朱德、陈毅领导的湘南起义和南昌起义部分部队在井冈山（原宁冈县龙市镇）胜利会师，是中国人民解放军建军史上的重要历史事件。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec12} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
