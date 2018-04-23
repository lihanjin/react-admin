import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../component/Spin/index'
import User from '../pages/user/user'
import AddUser from '../pages/user/userAdd'
const Layout = Loadable({
  loader: () => import('../component/layout/layout'),
  loading: Loading,
})
const Login_Box = Loadable({
  loader: () => import('../pages/login/index'),
  loading: Loading,
});


class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login_Box} />
            <Layout>
              <Route path="/user" exact component={User} />
              <Route path="/user/add" component={AddUser} />
            </Layout>  
        </Switch>
      </BrowserRouter>
    )
  }
}




export default Router