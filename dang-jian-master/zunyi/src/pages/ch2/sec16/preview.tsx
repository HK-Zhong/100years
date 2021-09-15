import * as Antd from "antd";
import sec16 from "./sec16.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中央政治局扩大会议在江西庐山召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  原定议题是总结“大跃进”以来的经验教训，继续纠正“左”的错误，但会议后期错误地发动了对彭德怀等人的批判。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec16} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
