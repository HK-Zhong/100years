import * as Antd from "antd";
import sec1 from "./sec1.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>中华人民共和国中央人民政府成立</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>下午2时，中央人民政府委员会召开第一次会议，一致决议接受《共同纲领》为施政纲领，任命周恩来为中央人民政府政务院总理兼外交部部长，毛泽东为人民革命军事委员会主席，朱德为人民解放军总司令。下午3时，庆祝中华人民共和国中央人民政府成立典礼在北京天安门广场隆重举行。毛泽东宣告中央人民政府成立。之后，举行盛大阅兵仪式和群众游行。12月2日，中央人民政府委员会第四次会议决定，每年的10月1日为中华人民共和国国庆日。中华人民共和国的成立，彻底结束了旧中国半殖民地半封建社会的历史，彻底结束了旧中国一盘散沙的局面，彻底废除了列强强加给中国的不平等条约和帝国主义在中国的一切特权，实现了中国从几千年封建专制政治向人民民主的伟大飞跃，实现了中国高度统一和各民族空前团结，中华民族发展进步从此开启新纪元。中国共产党成为在全国范围执掌政权的党。</p>
        {/*<img src={sec1} alt=""/>*/}
        <img className={styles.img} src={sec1} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
