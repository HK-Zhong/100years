import * as Antd from "antd";
import sec4 from "./sec4.png";
import styles from "../textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>西藏和平解放</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
          中央人民政府和西藏地方政府在北京签订《关于和平解放西藏办法的协议》（“十七条协议”），宣告西藏和平解放。10月26日，人民解放军进藏部队进驻拉萨。
          1951年5月23日，《中央人民政府和西藏地方政府关于和平解放西藏办法的协议》（简称《十七条协议》）的签订，宣告西藏和平解放。从此，西藏人民永远摆脱了帝国主义的侵略和羁绊，与全国各族人民一道在祖国大家庭里走上了团结、进步、发展的光明大道。以和平解放为起点，西藏各族人民在中国共产党的坚强领导下团结奋进，贯彻执行《十七条协议》，有力维护了国家主权、祖国统一和领土完整
        </p>
        <img className={styles.img} src={sec4}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
