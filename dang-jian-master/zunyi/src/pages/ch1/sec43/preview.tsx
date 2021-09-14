import * as Antd from "antd";
import sec43 from "./sec43.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>亚太经合组织领导人非正式会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   亚太经合组织(APEC)第九次领导人非正式会议在上海举行，这是中国第一次举行这样高级别的大型国际会议。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec43} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
