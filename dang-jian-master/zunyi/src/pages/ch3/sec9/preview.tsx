import * as Antd from "antd";
import sec9 from "./sec9.png";

export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中共第十二次全国代表大会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"left"}}>
        <img src={sec9} style={{width:"100px" ,height:"60px"}}/>
      </div>
      <div style={{float:"right"}}>
        <p>    9月1日-9月11日，中国共产党第十二次全国代表大会在北京举行。邓小平
          致开幕词，第一次提出了“建设有中国特色的社会主义”这一崭新的命题。</p>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
