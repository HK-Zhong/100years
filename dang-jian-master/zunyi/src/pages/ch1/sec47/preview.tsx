import * as Antd from "antd";
import sec47 from "./sec47.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>平津战役</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   平津战役是解放战争时期，中国人民解放军东北野战军和华北军区部队将国民党军傅作义集团抑留于北平、天津、张家口地区，予以各个歼灭的战略决战性战役。是解放战争具有决定意义的三大战役之一。
它于1948年11月29日始，1949年1月31日完，经64天。林彪、罗荣桓、聂荣臻、刘亚楼指挥中国人民解放军东北野战军和华北军区部队共100万大军，以北平、天津为中心。终以伤亡3.9万人的代价，消灭及改编国民党军3个兵团：13个军50个师共计52.1万人，解放了北平、天津在内的华北大片地区。
平津战役是中国人民解放战争具有决定意义的三大战役的最后一个战役。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec47} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
