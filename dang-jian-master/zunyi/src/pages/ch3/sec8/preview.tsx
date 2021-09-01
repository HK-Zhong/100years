import * as Antd from "antd";
import sec8 from "./sec8.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>叶剑英就关于台湾回归问题提出九条方针政策</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec8} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>9月30日，全国人大常委会委员长叶剑英向新华社记者发表谈话，就关于台湾回归祖国，实现和平统一问题提出九条方针政策。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
