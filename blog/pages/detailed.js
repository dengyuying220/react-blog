import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb, Affix} from 'antd'
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons';
import Header from '../components/Header'
import Author from '../components/Author.js'
import Footer from '../components/Footer.js'
import style from '../styles/pages/detailed.module.scss'
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
const Detailed = () => {

  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div className="breadDiv">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">案例</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">xxx</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className={style.detailedTitle}>blog开发实战</div>
            <div className={`${style.listIcon}`,`${style.center}` }>
              <span  className={`${style.listIcon}` }><CalendarOutlined />2021-07-12</span>
              <span  className={`${style.listIcon}`}><FolderOutlined />案例</span>
              <span  className={`${style.listIcon}` }><FireOutlined />2021人</span>
            </div>
            <div className={style.detailedContent}>
              <ReactMarkdown children={markdown}></ReactMarkdown>
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={5}>
            <div className={style.navTitleDiv}>
              <div className={style.navTitle}>文章目录</div>
            </div>
            <div className="comm_right">
              <MarkdownNavbar
                // className="comm-box"
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
   </>
  )
}

export default Detailed