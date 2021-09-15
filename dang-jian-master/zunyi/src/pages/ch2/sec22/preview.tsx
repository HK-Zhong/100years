import * as Antd from "antd";
import sec22 from "./sec22.png"
export default () => (
  <Antd.Typography>
    <Antd.Typography.Title level={2}>美国总统尼克松访问中国</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div style={{float:"right"}}>
        <p>文革后期，中共开始考虑缓和与西方的关系，中美之间展开秘密谈判。1972年2月21日，美国总统尼克松抵达北京，受到周恩来总理等中国领导人的欢迎。</p>
      </div>
      <div style={{float:"left"}}>
        <img src={sec22} style={{width:"100px" ,height:"60px"}}/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
