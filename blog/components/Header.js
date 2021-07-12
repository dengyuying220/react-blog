import React from 'react'
import style from '../styles/components/header.module.scss'
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined,
  } from '@ant-design/icons';

// import './header.module.scss'


import {Row, Col, Menu} from 'antd'
const Header = () => {
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

export default Header;