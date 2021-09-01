import * as Antd from "antd";
import sec25 from "./sec25.png";
import styles from "../textarea.css";

// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>全国扶贫开发工作会议在北京召开</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   全国扶贫开发工作会议在北京召开。国务委员兼国务院扶贫开发工作领导小组组长陈俊生在会上宣布：国务院决定从今年起实施《国家八七扶贫攻坚计划》，力争在本世纪最后的7年内，基本解决目前全国8000万贫困人口的温饱问题。《国家八七扶贫攻坚计划》作为今后7年全国扶贫工作的纲领性文件，其主要奋斗目标：一是到本世纪末，使全国绝大多数贫困户年人均纯收入按1990年不变价格计算达到500元以上，扶持贫困户创造稳定解决温饱问题的基础条件，减少返贫人口；二是加强基础设施建设，基本解决人畜饮水困难，使绝大多数贫困乡镇和有集贸市场、商品产地的地方通路、通电；三是改变文化、教育、卫生的落后状态，基本普及初等教育，积极扫除青壮年文盲，大力发展职业教育和技术教育，防治和减少地方病，把人口自然增长率控制在国家规定的范围内。今后国家将继续增加对贫困地区的投入，提高扶贫开发的力度。国务院决定，从1994年到2000年，每年再增加10亿元以工代服资金、10亿元扶贫专项贴息贷款。同时；全社会将继续给予大力支持。4月15日，国务院发出关于印发《国家八七扶贫攻坚计划》的通知。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec25} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
