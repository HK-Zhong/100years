import * as Antd from "antd";
import sec13 from "./sec13.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党红军第四军第九次代表大会（古田会议）</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>	在福建省上杭古田召开中国共产党红军第四军第九次代表大会（古田会议）。大会根据中央九月来信的精神，总结了南昌起义以来红军的建设经验，批评了各种错误思想，坚持以无产阶级思想来建设党和人民军队。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec13} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
