import * as Antd from "antd";
import sec19 from "./sec19.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>红一、红四方面军在甘肃会宁会师</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  10月22日，红一、红二方面军在甘肃隆德将台堡（今属宁夏西吉）会师。至此，三大主力红军胜利会师。长征是人类历史上的伟大壮举，是一次理想信念、检验真理、唤醒民众、开创新局的伟大远征。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec19} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
