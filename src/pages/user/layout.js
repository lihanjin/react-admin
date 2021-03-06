import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link } from 'react-router-dom'

import User from '../../pages/user/user'
import AddUser from '../../pages/user/userAdd'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class Layouts extends React.Component {
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
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1"><Link to={`/user`}>用户</Link></Menu.Item>
                <Menu.Item key="2"><Link to={`/user/add`}>用户</Link></Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
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
              <Route path="/user" exact component={User} />
              <Route path="/user/add" component={AddUser} />
          </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Layouts



