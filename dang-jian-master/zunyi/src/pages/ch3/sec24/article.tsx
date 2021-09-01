import * as Antd from "antd";
import sec24 from "./sec24.png";
import styles from "../textarea.css";
// @ts-ignore
// 文章组件
export default () => (

  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>汪道涵和辜振甫在新加坡举行会谈</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
      <p>   1993年4月27日至29日，海峡两岸关系协会会长汪道涵和台湾海峡交流基金会董事长辜振甫在新加坡举行会谈。双方就两岸经济合作、两岸科技文化交流、海协会与海基会的会务等问题交换了意见，并签署了《汪辜会谈共同协议》《两岸联系与会谈制度协议》《两岸公证书使用查证协议》和《两岸挂号函件查询、补偿事宜协议》等四份协议。《汪辜会谈共同协议》的主要内容包括：（1）双方确定1993年内就“违反有关规定进入对方地区人员之遣返及相关问题”“有关共同打击海上走私、抢劫等犯罪活动问题”“协商两岸海上渔事纠纷之处理”“两岸知识产权保护”及“两岸有关法院之间的联系与协助（暂定）”等议题进行事务性协商。（2）双方同意就台商在大陆投资权益及相关问题，两岸工商界人士互访等问题，择时择地继续进行商谈。（3）双方同意就加强能源、资源的开发与交流进行磋商。（4）双方同意积极促进青少年互访交流、两岸新闻界交流以及科技交流。（5）协议自双方签署之日起30日后生效实施。汪辜会谈是两岸授权的民间团体的最高负责人之间，经过半年多的酝酿和准备，首次进行的民间性、经济性、事务性、功能性的会谈。</p>
        {/*<img src={sec19} alt=""/>*/}
        <img className={styles.img} src={sec24} alt=""/>
     </div>
    </Antd.Typography.Text>

  </Antd.Typography>
);
