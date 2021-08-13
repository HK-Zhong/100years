import * as Antd from "antd";
import sec10 from "./sec10.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>首届世界互联网大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec10} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>首届世界互联网大会在浙江乌镇举行。习近平致贺词，强调共同构建和平、
          安全、开放、合作的网络空间，建立多边、民主、透明的国际互联网治理体系。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
