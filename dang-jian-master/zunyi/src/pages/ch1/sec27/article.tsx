import * as Antd from "antd";
import sec27 from "./sec27.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中共扩大的六届六中全会在延安召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   中国共产党第六届中央委员会第六次全体会议（中共扩大的六届六中全会）简称中国共产党六届六中全会、中共六届六中全会，是为了总结抗战以来的斗争经验，纠正王明在抗日战争前期的右倾投降主义的错误，明确党在民族战争中的地位，以争取抗日战争的胜利而召开的会议。
1938年9月29日至11月6日，中共六届六中全会在延安桥儿沟召开。参加会议的中央委员和党中央各部门、全国各地区的领导干部共55人，是党的六大以来到会人数最多的一次中央全会。全会批准以毛泽东为代表的中央政治局的路线，基本上克服了抗战初期王明右倾错误，统一了全党的思想、推动了党的各项工作迅速发展。
全会由张闻天致开幕词。选举毛泽东、朱德、周恩来、王明、张闻天、项英、博古、康生、王稼祥、彭德怀、刘少奇、陈云12人组成大会主席团。李富春为大会秘书长。全会根据毛泽东的报告通过了《中共扩大的六中全会政治决议案》、《关于各级党委暂行组织机构的决定》、《关于中央委员会工作规则与纪律的决定》、《关于各级党部工作规则与纪律的决定》等重要文件。</p>
        {/*<img src={sec27} alt=""/>*/}
        <img className={styles.img} src={sec27} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
