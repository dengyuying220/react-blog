import {Avatar,Divider} from 'antd'
import style from '../styles/components/author.module.scss'
import {
    GithubOutlined,
    QqOutlined,
    WechatOutlined,
  } from '@ant-design/icons';

const Author =()=>{

    return (
        <div className={[`${style.author_div}`,`comm_box`].join(' ')}>
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"  /></div>
            <div className={style.author_introduction}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className={style.account}  />
                <Avatar size={28} icon={<QqOutlined />}  className={style.account} />
                <Avatar size={28} icon={<WechatOutlined />}  className={style.account}  />

            </div>
        </div>
    )

}

export default Author