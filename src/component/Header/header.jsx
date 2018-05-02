import React from 'react'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom'
const { Header } = Layout;
class HeaderComponent extends React.Component{
  render() {
    return (
      <div>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['4']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="0"><Link to={`/`}>主页</Link></Menu.Item>
            <Menu.Item key="1"><Link to={`/user`}>用户</Link></Menu.Item>
            <Menu.Item key="2"><Link to={`/merchant`}>商家</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`/admin`}>admin</Link></Menu.Item>
            <Menu.Item key="4"><Link to={`/one`}>ONE</Link></Menu.Item>
          </Menu>
        </Header>
      </div>
    )
  }
}

export default HeaderComponent