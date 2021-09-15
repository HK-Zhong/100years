import * as Antd from "antd";
import sec24 from "./sec24.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>《中共中央为公布国共合作宣言》发表</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>  周恩来于1937年7月4日起草，中共中央7月15日正式交付国民党，9月22日国民党中央通讯社发表。2011年收入中央文献出版社出版的《建党以来重要文献选编》第十四册。《宣言》重申了中国共产党一贯坚持的三项奋斗的总目标和四项保证。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec24} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
