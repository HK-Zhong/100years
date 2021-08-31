import * as Antd from "antd";
import sec3 from "./sec3.png";
import styles from "../textarea.css";

// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>邓小平发表《坚持四项基本原则》的讲话</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>
           邓小平在理论工作务虚会上发表《坚持四项基本原则》的讲话，指出：过去搞民主革命，要适合中国情况，走毛泽东同志开辟的农村包围城市的道路。现在搞建设，也要适合中国情况，走出一条中国式的现代化道路。我们要实现四个现代化就必须在思想政治上坚持四项基本原则。这是实现四个现代化的根本前提。这四项基本原则是：必须坚持社会主义道路；必须坚持无产阶级专政；必须坚持党的领导；必须坚持马列主义、毛泽东思想。我们必须一方面继续肃清“四人帮”散布的极左思潮的流毒，另一方面用巨大的努力同从右面来怀疑或反对四项基本原则的思潮作坚决的斗争。理论工作务虚会后一阶段的会议由中共中央主持召开，从３月下旬开始，到４月３日结束。
        </p>
        <img className={styles.img} src={sec3}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
