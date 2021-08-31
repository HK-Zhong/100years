import * as Antd from "antd";
import sec3 from "./sec3.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>邓小平发表《坚持四项基本原则》的讲话</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec3} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>    邓小平在理论工作务虚会上发表《坚持四项基本原则》的讲话，指出：过去搞民主革命，要适合中国情况，走毛泽东同志开辟的农村包围城市的道路。现在搞建设，也要适合中国情况，走出一条中国式的现代化道路。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
