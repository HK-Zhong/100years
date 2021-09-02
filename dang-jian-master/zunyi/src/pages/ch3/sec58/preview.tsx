import * as Antd from "antd";
import sec58 from "./sec58.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>两岸“三通”迈开历史性步伐</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  １２月１５日，海峡两岸分别在北京、天津、上海、福州、深圳以及台北、高雄、基隆等城市同时举行海上直航、空中直航以及直接通邮的启动和庆祝仪式。两岸“三通”迈开历史性步伐。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec58} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
