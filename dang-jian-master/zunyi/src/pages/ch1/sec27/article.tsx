import * as Antd from "antd";
import sec27 from "./sec27.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>《反分裂国家法》通过</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>第十届全国人民代表大会第三次会议2005年3月14日通过。《反分裂国家法》共十条。
          《反分裂国家法》指出：本法是根据宪法制定的；世界上只有一个中国，大陆和台湾同
          属一个中国，中国的主权和领土完整不容分割；台湾问题是中国内战的遗留问题；完成
          统一祖国的大业是包括台湾同胞在内的全中国人民的神圣职责；坚持一个中国原则，是
          实现祖国和平统一的基础；国家采取措施维护台湾海峡地区和平稳定，发展两岸关系，
          依法保护台湾同胞的权利和利益；国家主张通过台湾海峡两岸平等的协商和谈判，实现
          和平统一；“台独”分裂势力以任何名义、任何方式造成台湾从中国分裂出去的事实，或
          者发生将会导致台湾从中国分裂出去的重大事变，或者和平统一的可能性完全丧失，国
          家得采取非和平方式及其他必要措施，捍卫国家主权和领土完整；依照本法规定采取非
          和平方式及其他必要措施并组织实施时，国家尽最大可能保护台湾平民和在台湾的外国
          人的生命财产安全和其他正当权益，减少损失。
        </p>
        <img className={styles.img} src={sec27} alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
