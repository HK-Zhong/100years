import * as Antd from "antd";
import sec5 from "./sec5.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央政治局在北京召开扩大会议</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec5} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>8月18日到8月23日，中共中央政治局在北京召开扩大会议。18日，邓小平在会上作了《党和国家领导制度的改革》的讲话。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
