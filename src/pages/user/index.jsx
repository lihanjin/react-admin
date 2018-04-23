import User from './user'
import AddUser from './userAdd'
import Layout from './layout'
import React from 'react'
import { Route } from 'react-router-dom'
class UserIndex extends React.Component{
  render() {
    return(
      <Layout>
        <Route path="/user"  component={User} />
        <Route path="/user/add" component={AddUser} />
      </Layout>
    )
  }
}
export default UserIndex