import * as Antd from "antd";
import sec3 from "@/pages/ch1/sec3/sec3.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>邓小平发表《坚持四项基本原则》的讲话</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec3} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>1979年3月30日，邓小平在理论工作务虚会上发表《坚持四项基本原则》的讲话。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
