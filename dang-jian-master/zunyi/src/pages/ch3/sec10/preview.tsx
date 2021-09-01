import * as Antd from "antd";
import sec10 from "./sec10.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国民主建国会第四次全国代表大会等会议召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec10} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>    11月3日至12月30日，中国民主建国会第四次全国代表大会、中华全国工商业联合会第五次会员代
          表大会、中国民主促进会第五次全国代表大会、台湾民主自治同盟第三次全盟代表大会、中国农工民
          主党第九次全国代表大会、中国致公党第八次全国代表大会、九三学社第四次全国代表大会、中国民
          主同盟第五次全国代表大会、中国国民党革命委员会第六次全国代表大会先后在北京召开。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
