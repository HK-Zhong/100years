import * as Antd from "antd";
import sec23 from "./sec23.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>日本国内阁总理大臣田中角荣应邀访问中国</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
      田中角荣访华，从上世纪60年代中期开始，日本开始推行全方位“经济外交”。为此日本提出以积极推行亚洲自主外交为基础，解决冲绳、日韩和日中问题。
田中角荣访华，从上世纪60年代中期开始，日本开始推行全方位“经济外交”。为此日本提出以积极推行亚洲自主外交为基础，解决冲绳、日韩和日中问题。到70年代，随着国际形势的变化，尤其是日本已经成为世界上的经济大国，日本已经有条件改变其过去的一味追随美国的政策方针，转而推行“自主多边外交”。田中角荣上台后，积极主张改善同中华人民共和国的关系，实现两国关系的正常化。1972年9月25-30日，日本内阁总理大臣田中角荣，应周恩来总理的邀请对中国进行了访问。两国总理经过会谈后，于9月29日在北京发表了《中日两国政府联合声明》，宣布自本声明公布之日起，结束中日两国之间迄今存在的不正常状态和建立外交关系。
      </p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec23} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
