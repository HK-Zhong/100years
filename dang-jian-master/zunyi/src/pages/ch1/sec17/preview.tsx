import * as Antd from "antd";
import sec17 from "./sec17.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央政治局在遵义召开扩大会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  中共中央政治局在遵义召开扩大会议。出席会议的政治局委员有毛泽东、张闻天、周恩来、朱德、陈云、博古，候补委员有王稼祥、刘少奇、邓发、何克全，参加会议的还有红军总部和各军团主要负责人刘伯承、李富春、林彪、聂荣臻、彭德怀、杨尚昆、李卓然以及中央秘书长邓小平。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec17} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
