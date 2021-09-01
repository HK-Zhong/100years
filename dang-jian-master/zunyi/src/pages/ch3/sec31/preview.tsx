import * as Antd from "antd";
import sec31 from "./sec31.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共第十五次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   中国共产党第十五次全国代表大会在北京举行。江泽民代表第十四届中央委员会向大会作《高举邓小平理论伟大旗帜，把建设有中国特色社会主义事业全面推向２１世纪》的报告。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec31} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
