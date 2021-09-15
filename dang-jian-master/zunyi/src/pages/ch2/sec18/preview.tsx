import * as Antd from "antd";
import sec18 from "./sec18.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央在瓦窑堡开始举行政治局会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  中共中央在瓦窑堡开始举行政治局会议。参加会议的有毛泽东、张闻天、周恩来、博古、刘少奇、邓发、张浩（林育英）等人。23日，会议通过《中央关于军事战略问题的决议》。决议确定“把国内战争同民族战争结合起来”，“准备直接对日作战的力量”和“扩大红军”的方针；同时，提出了抗日游击战争在战略上的重大作用。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec18} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
