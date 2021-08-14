import * as Antd from "antd";
import sec12 from "./sec12.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>中国共产党和国家主要领导人出席首个国家公祭日</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>2014年2月27日，第十二届全国人大常委会第七次会议通过决定，将每年的12月13日设立为南京大屠杀死难者国家公祭日。决议的通过，使得对南京大屠杀遇难者的纪念上升为国家层面，表明了中国人民反对侵略战争、捍卫人类尊严、维护世界和平的坚定立场。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec12} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
