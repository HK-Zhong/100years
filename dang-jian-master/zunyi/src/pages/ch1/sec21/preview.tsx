import * as Antd from "antd";
import sec21 from "./sec21.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>西安事变</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>1936年12月12日，为挽救民族危亡、劝谏蒋介石改变“攘外必先安内”的既定国策、停止内战一致抗日，张学良、杨虎城毅然在临潼对蒋介石实行“兵谏”，扣留来陕督战的蒋介石，发动了震惊中外的“西安事变”，亦称双十二事变。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec21} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
