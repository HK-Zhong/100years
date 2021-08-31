import * as Antd from "antd";
import sec22 from "./sec22.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第十九次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>10月18日－24日,中国共产党第十九次全国代表大会举行。大
          会正式代表2280人，特邀代表74人，代表全国8900多万党员。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec22} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
