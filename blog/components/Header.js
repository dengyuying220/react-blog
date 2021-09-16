import React, {useState, useEffect} from 'react'
// React.useLayoutEffect = useEffect;
import axios from 'axios'

import style from '../styles/components/header.module.scss'
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined,
  } from '@ant-design/icons';
  import  servicePath  from '../config/apiUrl'

// import './header.module.scss'


import {Row, Col, Menu} from 'antd'
const Header = () => {
    const [navArr, setNavArr] = useState([]) 
    useEffect(()=>{
        console.log(11111111111)
        const fetchData = async ()=>{
            const result = await axios(servicePath.getTypeInfo).then(
                (res)=>{
                //   console.log('远程获取数据结果:',res)
                  return res
                }
            )
            console.log('result:',result)

            setNavArr(result.data.data)
            console.log('navArr:',navArr)

            
        }
        fetchData()
        
    }, [])
    const handleClick = (e)=> {
        if(e.key==1) {
            
        }
    }
    // console.log(result)

    return (
        <div className={style.header}>
            <Row type="flex" justify="center">
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={style.header_logo}>deng</span>
                    <span className={style.header_txt}>记录前端开发日常。</span>
                </Col>
                <Col  xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <YoutubeOutlined />
                            案例
                        </Menu.Item>
                        <Menu.Item key="life">
                            <SmileOutlined />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

// Header.getInitialProps   = async ()=>{
//     const promise = new Promise((resolve)=>{
//       axios(servicePath.getTypeInfo).then(
//         (res)=>{
//           console.log('远程获取数据结果:',res)
//           resolve(res)
//         }
//       )
//     })
  
//     return await promise
//   }

export default Header;