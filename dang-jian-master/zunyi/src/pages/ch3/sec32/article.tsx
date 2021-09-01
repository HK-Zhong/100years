import * as Antd from "antd";
import sec32 from "./sec32.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>抗洪救灾</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>
        1998年夏天，全国洪水肆虐，长江告急，松花江、嫩江告急，西江、闽江等流域也深受洪水灾害。８月１３日，江泽民赴湖北长江抗洪抢险第一线，看望、慰问、鼓励广大军民，指导抗洪抢险斗争。８月１６日，江泽民向参加抗洪的人民解放军发布命令：沿线部队全部上堤，军民团结，死守决战，夺取全胜。同时要求地方各级党政干部率领群众，与部队官兵共同严防死守，确保长江干堤安全。
        ８月２4日－２９日，第九届全国人大常委会第四次会议在北京举行。２６日，温家宝代表国务院向全国人大常委会报告全国抗洪抢险的情况。报告中说，自６月份起，长江发生了继１９５４年以来第二次全流域性大洪水，松花江、嫩江、珠江流域的西江和福建闽江等江河，也相继发生了百年一遇的特大洪水。由于洪水量级大、涉及范围广、持续时间长，洪涝灾害非常严重。在党中央、国务院的直接领导下，百万军民与罕见的大洪水进行了殊死搏斗。截至目前，抗洪抢险已经取得重大胜利。会议还通过决议，批准财政部向国有商业银行增发1000亿元国债，用于加大基础设施建设的投入，并批准本年列入中央预算支出500亿元，将中央财政赤字由年初预算的460亿元扩大到960亿元。
        ９月２８日，中共中央、国务院在北京人民大会堂隆重举行全国抗洪抢险总结表彰大会。江泽民发表重要讲话强调，在同洪水搏斗中，我们的民族和人民展现出了一种十分崇高的精神。这就是万众一心、众志成城，不怕困难、顽强拼搏，坚韧不拔、敢于胜利的伟大抗洪精神。抗洪精神同我们党一贯倡导的革命精神和新时期的创业精神一样，都是我国人民的宝贵精神财富。我们世世代代都要继承和弘扬这些精神，激励我们的广大干部和群众不断从胜利走向新的胜利。
      </p>
        {/*<img src={sec32} alt=""/>*/}
        <img className={styles.img} src={sec32} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
