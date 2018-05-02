import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link } from 'react-router-dom'

import book from './book'
import home from './home'
import movie from './movie'
import music from './music'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class OneLayout extends React.Component {
  render() {
    // var  pathname = this.props.location.pathname || '/home'
    // pathname = pathname.split('/')
    return (
      <Layout>
        <Layout>
          <Sider
            width={200}
            style={{ background: '#fff' }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />菜单</span>}>
                <Menu.Item key="1"><Link to={`/one/home`}>首页</Link></Menu.Item>
                <Menu.Item key="2"><Link to={`/one/movie`}>影视</Link></Menu.Item>
                <Menu.Item key="3"><Link to={`/one/book`}>阅读</Link></Menu.Item>
                <Menu.Item key="4"><Link to={`/one/music`}>音乐</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* {
                pathname.map((name, index) => {
                  return (
                    <Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>
                  )
                })
              } */}
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route path="/one/" component={home} exact />
              <Route path="/one/home" component={home} />
              <Route path="/one/movie" component={movie} />
              <Route path="/one/book" component={book} />
              <Route path="/one/music" component={music} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default OneLayout