import * as Antd from "antd";
import sec4 from "./sec4.png";
import styles from "../textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>习近平：厉行勤俭节约，反对铺张浪费</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>2013年1月17日，习近平在新华社《网民呼吁遏制餐饮环节“舌尖上的浪费”》材料上作出批示：从文章反映的情况看，餐饮环节上的浪费现象触目惊心。广大干部群众对餐饮浪费等各种浪费行为特别是公款浪费行为反映强烈。联想到我国还有为数众多的困难群众，各种浪费现象的严重存在令人十分痛心。浪费之风务必狠刹！要加大宣传引导力度，大力弘扬中华民族勤俭节约的优秀传统，大力宣传节约光荣、浪费可耻的思想观念，努力使厉行节约、反对浪费在全社会蔚然成风。各级党政军机关、事业单位，各人民团体、国有企业，各级领导干部，都要率先垂范，严格执行公务接待制度，严格落实各项节约措施，坚决杜绝公款浪费现象。要采取针对性、操作性、指导性强的举措，加强监督检查，鼓励节约，整治浪费。随后与2013年11月18日，中共中央、国务院印发《党政机关厉行节约反对浪费条例》。依据这个条例，相继就党政机关经费管理、国内差旅、因公临时出国（境）、培训、公务接待、公务用车、会议活动、办公用房、基层党建活动、资源节约等方面出台系列党内法规和规范性文件。　</p>
        <img className={styles.img} src={sec4}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
