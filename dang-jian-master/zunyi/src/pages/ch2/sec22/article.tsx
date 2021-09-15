import * as Antd from "antd";
import sec22 from "./sec22.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>美国总统尼克松访问中国</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      文革后期，中共开始考虑缓和与西方的关系，中美之间展开秘密谈判。1972年2月21日，美国总统尼克松抵达北京，受到周恩来总理等中国领导人的欢迎。2月28日，中美上海联合公报发表，宣布中美两国关系走向正常化。从此，中华人民共和国和美利坚合众国的关系进入了一个新的历史时期。
此前，美国乒乓球代表团于1971年4月应邀访华；美国总统国家安全事务助理基辛格分别于1971年7月和10月两次访华。28日，中美双方在上海发表《联合公报》，标志两国关系正常化进程的开始。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec22} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
