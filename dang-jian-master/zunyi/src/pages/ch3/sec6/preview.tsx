import * as Antd from "antd";
import sec6 from "./sec6.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共中央总书记习近平会见中国国民党荣誉主席吴伯雄</Antd.Typography.Title>
    <Antd.Typography.Text>
        <div style={{float:"left"}}>
          <img src={sec6} style={{width:"100px" ,height:"60px"}}/>
        </div>
        <div style={{float:"right"}}>
          <p>中共中央总书记习近平6月13日下午在人民大会堂会见了中国国民党荣誉主席吴伯雄和他率领的中国国民党访问团全体成员。</p>
        </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
