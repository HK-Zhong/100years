import * as Antd from "antd";
import sec1 from "./sec1.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第一次全国代表大会在上海举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>７月２３日－８月初，中国共产党第一次全国代表大会在上海举行（一大开幕日期是建国以后根据档案材料查证清楚的。闭幕日期是8月1日或2日。在此以前，1938年5月，毛泽东在《论持久战》中曾提到7月1日是党建立十七周年纪念日；1941年6月，中共中央在《关于中国共产党诞生二十周年抗战四周年纪念指示》中，规定7月1日是党的诞生纪念日。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec1} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
