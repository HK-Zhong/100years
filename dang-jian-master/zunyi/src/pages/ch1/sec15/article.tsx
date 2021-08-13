import * as Antd from "antd";
import sec15 from "./sec15.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十四大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>10月12日—18日　中国共产党第十四次全国代表大会在北京举行。江泽民代表十三届
          中央委员会作《加快改革开放和现代化建设步伐，夺取有中国特色社会主义事业的更大
          胜利》的报告。报告总结了十一届三中全会以来十四年的实践经验。认为我们取得改革
          开放胜利的根本原因是坚持了把马克思主义基本原理同我国具体实际相结合，逐步形成
          和发展了建设有中国特色社会主义的理论。这个理论第一次比较系统地初步回答了中国
          这样的经济文化比较落后的国家如何建设社会主义、如何巩固和发展社会主义的一系列
          基本问题，用新的思想、观点继承和发展了马克思主义。十四年经验集中到一点就是毫
          不动摇地坚持以建设有中国特色社会主义理论为指导的党的基本路线，这是我们的事业
          能够经受风险考验顺利达到目标的最可靠保证。报告明确提出了我国经济体制改革的目
          标是建立社会主义市场经济体制。社会主义市场经济体制是同社会主义基本制度结合在
          一起的。
        </p>
        <img className={styles.img} src={sec15} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
