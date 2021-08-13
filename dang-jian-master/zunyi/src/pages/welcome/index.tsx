import wel from "./wel.png"
import * as Antd from "antd";
export default () => (
  <div style={{textAlign:"center",width:"100%",height:"100%",justifyContent:"center"}}>
    <img src={wel} style={{marginBottom:"50px"}}/>
    <Antd.Typography.Title level={1}>欢迎使用系统</Antd.Typography.Title>
    <Antd.Typography.Title level={3}>点击左侧章节开始浏览</Antd.Typography.Title>
  </div>
);
