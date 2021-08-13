import * as Antd from "antd";
import sec16 from "./sec16.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十四届三中全会</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>会议审议并通过了《中共中央关于建立社会主义市场经济体制若干问题的决定》。
          《决定》指出：社会主义市场经济体制是同社会主义基本制度结合在一起的。建立
          社会主义市场经济体制，就是要使市场在国家宏观调控下对资源配置起基础性作用。
          为实现这个目标，必须坚持以公有制为主体、多种经济成分共同发展的方针，进一
          步转换国有企业经营机制，建立适应市场经济要求，产权清晰、权责明确、政企分开
          、管理科学的现代企业制度；建立全国统一开放的市场体系，实现城乡市场紧密结合
          ，国内市场与国际市场相互衔接，促进资源的优化配置；转变政府管理经济的职能，
          建立以间接手段为主的完善的宏观调控体系，保证国民经济的健康运行；建立以按劳
          分配为主体，效率优先、兼顾公平的收入分配制度，鼓励一部分地区一部分人先富起
          来，走共同富裕的道路。
        </p>
        <img className={styles.img} src={sec16} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
