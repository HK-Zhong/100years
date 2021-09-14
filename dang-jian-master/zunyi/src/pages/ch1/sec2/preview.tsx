import * as Antd from "antd";
import sec2 from "./sec2.png";
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党第二次全国代表大会在上海举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec2} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>大会发表了具有重大历史意义的宣言。宣言根据列宁关于民族殖民地问题的理论和党成立后对中国革命基本问题的探索，分析了国际形势和中国社会的半殖民地半封建的性质，阐明了中国革命的性质、动力和对象，制定了党的最低纲领和最高纲领。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
