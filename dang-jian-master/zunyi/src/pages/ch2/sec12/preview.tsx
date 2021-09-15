import * as Antd from "antd";
import sec12 from "./sec12.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第八次全国代表大会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>大会正式代表1026人，候补代表107人，代表全国1073万党员。毛泽东致开幕词，刘少奇作政治报告，周恩来作关于发展国民经济的第二个五年计划的建议的报告，邓小平作关于修改党章的报告。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec12} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
