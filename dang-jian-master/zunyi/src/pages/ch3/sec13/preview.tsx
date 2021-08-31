import * as Antd from "antd";
import sec13 from "./sec13.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>国务院正式批复同意设立福州新区</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>国务院9月9日在中国政府网发布文件，正式批复同意设立福州新区。福州新区由此成为全国第14个、福建省首个国家级新区。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec13} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
