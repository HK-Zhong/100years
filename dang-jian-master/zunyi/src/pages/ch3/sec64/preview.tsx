import * as Antd from "antd";
import sec from "./sec.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>抗洪救灾</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   1998年夏天，全国洪水肆虐，长江告急，松花江、嫩江告急，西江、闽江等流域也深受洪水灾害。８月１３日，江泽民赴湖北长江抗洪抢险第一线，看望、慰问、鼓励广大军民，指导抗洪抢险斗争。８月１６日，江泽民向参加抗洪的人民解放军发布命令：沿线部队全部上堤，军民团结，死守决战，夺取全胜。同时要求地方各级党政干部率领群众，与部队官兵共同严防死守，确保长江干堤安全。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
