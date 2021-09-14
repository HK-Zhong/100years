import * as Antd from "antd";
import sec49 from "./sec49.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中国政府首次正式发表《中国对非洲政策文件》</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      1月12日 中国政府首次正式发表《中国对非洲政策文件》，指出新形势下中非传统友好关系面临新的发展机遇。中国政府制订对非洲政策文件，旨在宣示中国对非政策的目标及措施，规划今后一段时期双方在各领域的合作，推动中非关系长期稳定发展、互利合作不断迈上新的台阶。中国政府致力于建立和发展中非间政治上平等互信、经济上合作共赢、文化上交流互鉴的新型战略伙伴关系。
      </p>
        {/*<img src={sec49} alt=""/>*/}
        <img className={styles.img} src={sec49} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
