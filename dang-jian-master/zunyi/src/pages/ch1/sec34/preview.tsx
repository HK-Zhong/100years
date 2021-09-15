import * as Antd from "antd";
import sec34 from "./sec34.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>皖南事变</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   新四军军部及所属皖南部队9000余人，在遵照国民党军事当局的命令向北转移途中遭到国民党军8万余人的伏击和围攻，大部壮烈牺牲或被俘，军长叶挺被扣押，副军长项英遇害，这就是皖南事变。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec34} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
