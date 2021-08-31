import * as Antd from "antd";
import sec29 from "./sec29.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>习近平在主持召开中央政治局常委会会议时，对做好2019年12月27日以来湖北武汉监测发现的不明原因肺炎疫情防控工作提出要求</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>习近平亲自指挥、亲自部署，坚持把人民生命安全和身体健康放在第一位，带领全党全军全国各族人民迅速打响疫情防控的人民战争、总体战、阻击战，取得了全国抗疫斗争重大战略成果。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec29} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
