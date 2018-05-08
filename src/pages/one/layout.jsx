import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd' 
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import book from './book'
import home from './home'
import movie from './movie'
import onestory from './onestory'
import movieDetail from './movieDetail'
import music from './music'
const { SubMenu } = Menu 
const { Content, Sider } = Layout 
class OneLayout extends React.Component {
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
      case 'home':
        key = '1'
        break 
      case 'movie':
        key = '2'
        break 
      case 'music':
        key = '4'
        break 
      case 'book':
        key = '3'
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
    return (
      <Layout>
        <Layout>
          <Sider
            width={200}
            style={{ background: '#fff' }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={this.state.SelectedKeys}
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
            <Breadcrumb.Item >{this.props.location.pathname.substr(1)}</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
              <Route path="/one/" component={home} exact />
              <Route path="/one/home" component={home} />
              <Route path="/one/onestory" component={onestory} />
              <Route path="/one/movie/movieDetail" component={movieDetail} />
              <Route path="/one/movie" component={movie} exact/>
              <Route path="/one/book" component={book} />
              <Route path="/one/music" component={music} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(OneLayout)