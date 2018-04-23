import React, { Component } from 'react'
import './login.less'
import { Tabs } from 'antd'
import LoginForm from './login'
import RegisterForm from './register'
const TabPane = Tabs.TabPane

class Login_Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  tabChange (key) {
    console.log(key);
  }
  render() {
    return (
      <div className="login">
        <div className="login_box">
          <Tabs defaultActiveKey="1" onChange={this.tabChange.bind(this)}>
            <TabPane tab="登录" key="1" className="login_form"><LoginForm></LoginForm></TabPane>
            <TabPane tab="注册" key="2" className="register_form"><RegisterForm></RegisterForm></TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
export default Login_Box