import * as Antd from "antd";
import sec38 from "./sec38.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第七次全国代表大会在延安举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   出席大会的正式代表547人，候补代表208人，代表全国121万党员。毛泽东致开幕词，向大会提交《论联合政府》政治报告并作口头报告，朱德作《论解放区战场》军事报告，刘少奇作《关于修改党章的报告》，周恩来作《论统一战线》发言。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec38} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
