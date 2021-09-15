import * as Antd from "antd";
import sec27 from "./sec27.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>与周边国家在上海共同签署关于在边境地区加强军事领域信任的协定</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   中国共产党第六届中央委员会第六次全体会议（中共扩大的六届六中全会）简称中国共产党六届六中全会、中共六届六中全会，是为了总结抗战以来的斗争经验，纠正王明在抗日战争前期的右倾投降主义的错误，明确党在民族战争中的地位，以争取抗日战争的胜利而召开的会议。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec27} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
