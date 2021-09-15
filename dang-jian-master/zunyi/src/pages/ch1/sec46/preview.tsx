import * as Antd from "antd";
import sec46 from "./sec46.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>淮海战役</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   淮海战役，国民党称“徐蚌会战”，是解放战争时期中国人民解放军中原野战军、中国人民解放军华东野战军在以徐州为中心，东起海州（连云港），西至商丘，北起临城（今枣庄市薛城），南达淮河的广大地区，对国民党军队进行的战略性进攻战役。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec46} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
