import * as Antd from "antd";
import sec15 from "./sec15.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共第十三次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>    10月25日-11月1日，中国共产党第十三次全国代表大会在北京举行。会议的中心议题是进一步加快和深化改革。邓小平主持大会开幕式，赵紫阳作题为《沿着有中国特色的社会主义道路前进》的报告。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec15} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
