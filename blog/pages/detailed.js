import React, {useState, useEffect} from 'react'
React.useLayoutEffect = useEffect;

import Head from 'next/head'
import axios from 'axios'

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
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import Tocify from '../components/tocify.tsx'
import  servicePath  from '../config/apiUrl'
const Detailed = (data) => {
  const tocify = new Tocify()
  var renderer = new marked.Renderer()
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer: renderer,
    highlight: function(code, lang) {
      return hljs.highlightAuto(code).value;
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  let html =  marked(data.article_content)
  const [ detail , setDetail ] = useState(data)
  console.log(html)
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
              <span  className={`${style.listIcon}` }><CalendarOutlined />{detail.add_time}</span>
              <span  className={`${style.listIcon}`}><FolderOutlined />{detail.type_name}</span>
              <span  className={`${style.listIcon}` }><FireOutlined />{detail.view_count}人</span>
            </div>
            <div className={style.detailedContent}
              dangerouslySetInnerHTML={{__html: html}}
            >
              {/* {html} */}
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
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
   </>
  )
}

Detailed.getInitialProps = async (context)=>{
  const promise = new Promise((resolve)=>{
    let id = context.query.id
    axios(servicePath.getArticleById+id).then(
      (res)=>{
        resolve(res.data.data[0])
      }
    )
  })
  return await promise
}

export default Detailed