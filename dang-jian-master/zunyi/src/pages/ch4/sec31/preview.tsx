import * as Antd from "antd";
import sec31 from "./sec31.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>全国脱贫攻坚总结表彰大会召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>习近平宣告，我国脱贫攻坚战取得了全面胜利，现行标准下9899万农村贫困人口全部脱贫，832个贫困县全部摘帽，12.8万个贫困村全部出列，区域性整体贫困得到解决，完成了消除绝对贫困的艰巨任务。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec31} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
