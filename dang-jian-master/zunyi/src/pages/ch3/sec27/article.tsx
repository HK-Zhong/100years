import * as Antd from "antd";
import sec27 from "./sec27.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>与周边国家在上海共同签署关于在边境地区加强军事领域信任的协定</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   4月26日，国家主席江泽民和俄罗斯总统叶利钦、哈萨克斯坦总统纳扎尔巴耶夫、吉尔吉斯斯坦总统阿卡耶夫、塔吉克斯坦总统拉赫莫诺夫在上海共同签署《中华人民共和国和俄罗斯联邦、哈萨克斯坦共和国、吉尔吉斯共和国、塔吉克斯坦共和国关于在边境地区加强军事领域信任的协定》。《协定》的主要内容有：双方部署在边境地区的军事力量互不进攻；双方不进行针对对方的军事演习；限制军事演习的规模、范围和次数；相互通报边境100公里纵深地区的重要军事活动情况；彼此邀请观察实兵演习；预防危险军事活动；加强双方边境地 区军事力量和边防部队之间的友好交往等。</p>
        {/*<img src={sec27} alt=""/>*/}
        <img className={styles.img} src={sec27} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
