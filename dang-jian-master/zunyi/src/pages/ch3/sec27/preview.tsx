import * as Antd from "antd";
import sec27 from "./sec27.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共十九届四中全会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>全会通过《关于坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化若干重大问题的决定》。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec27} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
