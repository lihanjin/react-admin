import React from 'react'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom'
const { Header } = Layout;
class HeaderComponent extends React.Component{
  constructor() {
    super()
    this.state = {
      SelectedKeys: ['1']
    }
  }
  componentWillMount() {
    let href = window.location.href.split('/')
    href = href[href.length - 1]
    let keyarr = [],
      key 
    switch (href) {
      case '':
        key = '0'
        break 
      case 'user':
        key = '1'
        break 
      case 'merchant':
        key = '2'
        break 
      case 'admin':
        key = '3'
        break 
        case 'one':
        key = '4'
        break 
      default: key = '1'
        break 
    }
    keyarr.push(key)
    this.setState({
      SelectedKeys: keyarr
    })
  }
  render() {
    // var  pathname = this.props.location.pathname || '/home'
    // pathname = pathname.split('/')
    return (
      <div>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.state.SelectedKeys}
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