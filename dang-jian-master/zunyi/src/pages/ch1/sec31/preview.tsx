import * as Antd from "antd";
import sec31 from "./sec31.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《新民主主义论》发表</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   毛泽东1940年1月9日在陕甘宁边区文化协会第一次代表大会上的讲演，原题为《新民主主义的政治与新民主主义的文化》。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec31} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
