import * as Antd from "antd";
import sec48 from "./sec48.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>连战宋楚瑜郁慕明先后访问大陆</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>   ４月２９日　胡锦涛在北京与中国国民党主席连战举行正式会谈。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec48} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
