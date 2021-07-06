import React from 'react'
import style from './header.module.scss'

// import '../s header.module.css'


import {Row, Col, Menu, Icon} from 'antd'
const Header = () => (
  <div className={style.header}>
    <Row type="flex" justify="center">
    <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className={style.header_logo}>技术胖</span>
            <span className={style.header_txt}>专注前端开发,每年100集免费视频。</span>
        </Col>

        <Col className={style.memu_div} xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <Icon type="youtube" />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    <Icon type="smile" />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
  </div>
)
export default Header;