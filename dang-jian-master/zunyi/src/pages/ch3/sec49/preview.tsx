import * as Antd from "antd";
import sec49 from "./sec49.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国政府首次正式发表《中国对非洲政策文件》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  1月12日 中国政府首次正式发表《中国对非洲政策文件》，指出新形势下中非传统友好关系面临新的发展机遇。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec49} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
