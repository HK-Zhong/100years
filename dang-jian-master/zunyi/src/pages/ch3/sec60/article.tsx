import * as Antd from "antd";
import sec60 from "./sec60.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>2010年上海世界博览会举行</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      中国2010年上海世界博览会举行，主题是“城市，让生活更美好”。这是中国首次举办的综合性世界博览会，也是第一次在发展中国家举行的注册类世界博览会。246个国家和国际组织参展。中外参观者达7308万人次，创造了世博会历史上的新纪录。
      </p>
        {/*<img src={sec60} alt=""/>*/}
        <img className={styles.img} src={sec60} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
