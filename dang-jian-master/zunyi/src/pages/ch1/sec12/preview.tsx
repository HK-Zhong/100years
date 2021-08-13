import * as Antd from "antd";
import sec12 from "./sec12.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title>南沙海战</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec12} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>南沙海战，又称3·14海战、赤瓜礁海战。是1988年3月14日中国海军和越南海军在中国南沙群岛赤瓜礁海域发生的武装冲突，是中国海军的一场自卫还击战。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
