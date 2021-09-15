import * as Antd from "antd";
import sec28 from "./sec28.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十一届三中全会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   全会批判了“两个凡是”的错误方针，充分肯定必须完整地、准确地掌握毛泽东思想的科学体系，高度评价关于实践是检验真理的唯一标准问题的讨论。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec28} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
