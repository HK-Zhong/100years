import * as Antd from "antd";
import sec8 from "./sec8.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>一届全国人大一次会议举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec8} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>会议通过《中华人民共和国宪法》；选举毛泽东为国家主席，刘少奇为全国人大常委会委员长；决定周恩来为国务院总理；决定设立国防委员会，毛泽东兼任国防委员会主席。全国人民代表大会的召开，标志着人民代表大会制度在全国范围内建立起来。</p>
      </div>

    </Antd.Typography.Text>
  </Antd.Typography>
);
