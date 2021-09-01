import * as Antd from "antd";
import sec11 from "./sec11.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>纪念马克思逝世一百周年</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>    中共中央在北京举行万人大会，隆重纪念马克思逝世一百周年。胡耀邦在会上
          作了题为《马克思主义伟大真理的光芒照耀我们前进》的讲话。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec11} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
