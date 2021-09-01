import * as Antd from "antd";
import sec11 from "./sec11.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>纪念马克思逝世一百周年</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>    中共中央在北京举行万人大会，隆重纪念马克思逝世一百周年。胡耀邦在会上作了题为《马克思主义伟大真理的光芒照耀我们前进》的讲话。他指出：中国革命的胜利是十月革命后马克思主义发展历史上最重大的事件。马克思主义发展历史的一条根本经验，就是各国党要根据自己的实际，决定自己的路线和政策。讲话强调了如何正确对待知识和知识分子的问题，指出这是当前把马克思主义普遍真理同中国社会主义现代化建设的具体实践很好地结合起来的一个重大而迫切的问题。</p>
        {/*<img src={sec1} alt=""/>*/}
        <img className={styles.img} src={sec11} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
