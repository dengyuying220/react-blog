import React, {useState, useEffect} from 'react'
React.useLayoutEffect = useEffect;
import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'
import {Row, Col, List} from 'antd'
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined,
} from '@ant-design/icons';
import Header from '../components/Header.js'
import Author from '../components/Author.js'
import Footer from '../components/Footer.js'


import style from '../styles/pages/index.module.scss'
const Home = (list) => {
  const [ mylist , setMylist ] = useState(list.data)
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
          <List
            header={<div className="list-header">最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list_title">
                  <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list_icon">
                  <span><CalendarOutlined /> {item.add_time}</span>
                  <span><FolderOpenOutlined /> {item.type_name}</span>
                  <span><FireOutlined /> {item.view_count}人</span>
                </div>
                <div className="list_context">{item.introduce}</div>  
              </List.Item>
            )}
          >
          </List>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
          <Author />
        </Col>
      </Row>
      <Footer />
   </>
  )
}

Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res)=>{
        console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home