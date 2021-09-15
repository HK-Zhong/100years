import * as Antd from "antd";
import sec27 from "./sec27.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>实践是检验真理的唯一标准</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   《光明日报》以特约评论员名义公开发表这篇文章，新华社向全国转发。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec27} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
