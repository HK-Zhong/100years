import * as Antd from "antd";
import sec11 from "./sec11.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共十三大召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>10月25日—11月1日，中国共产党第十三次全国代表大会在北京举行。会议的中心
          议题是进一步加快和深化改革。邓小平主持大会开幕式，赵紫阳作题为《沿着有中
          国特色的社会主义道路前进》的报告。报告阐明中国正处在社会主义初级阶段，规
          定了党在这个阶段的基本路线，即“领导和团结全国各族人民，以经济建设为中心，
          坚持四项基本原则，坚持改革开放，自力更生，艰苦创业，为把我国建设成为富强、
          民主、文明的社会主义现代化强国而奋斗”。根据我国国情和邓小平的设计，报告提
          出分三步走的经济发展战略部署。关于经济体制改革，报告提出，要围绕转变企业经
          营机制这个中心环节，分阶段地进行计划、投资、物资、财政、金融、外贸等方面体
          制的配套改革，加快建立和培育社会主义市场体系，逐步建立起有计划商品经济新体
          制的基本框架。</p>
        <img className={styles.img} src={sec11}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
