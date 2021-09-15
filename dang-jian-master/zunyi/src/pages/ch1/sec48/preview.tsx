import * as Antd from "antd";
import sec48 from "./sec48.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共七届二中全会在西柏坡召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  中国共产党第七届中央委员会第二次全体会议（中国共产党七届二中全会、中共七届二中全会）于1949年3月5日—13日在河北省平山县西柏坡举行。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec48} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
