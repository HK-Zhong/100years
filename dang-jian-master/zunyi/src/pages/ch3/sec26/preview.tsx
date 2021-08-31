import * as Antd from "antd";
import sec26 from "./sec26.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>纪念五四运动100周年大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>纪念五四运动100周年大会30日上午在北京人民大会堂隆重举行。中共中央总书
          记、国家主席、中央军委主席习近平在会上发表重要讲话。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec26} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
