import * as Antd from "antd";
import sec33 from "./sec33.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党历史展览馆开馆</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>习近平参观“‘不忘初心、牢记使命’中国共产党历史展览”，并带领党员领导同志重温入党誓词。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec33} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
