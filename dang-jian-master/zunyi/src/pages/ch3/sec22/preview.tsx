import * as Antd from "antd";
import sec22 from "./sec22.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>邓小平发表著名的“南方谈话”</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   邓小平南方谈话，是在国际国内政治风波严峻考验的重大历史关头，坚持十一届三中全会以来的理论和路线，深刻回答长期束缚人们思想的许多重大认识问题，把改革开放和现代化建设推进到新阶段的又一个解放思想、实事求是的宣言书。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec22} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
