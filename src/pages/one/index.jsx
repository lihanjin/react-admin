
import Layout from './layout'
import React from 'react'
import { Route } from 'react-router-dom'
import book from './book'
import home from './home'
import movie from './movie'
import music from './music'
class OneIndex extends React.Component{
  render() {
    return(
      <Layout>
        <Route path="/one/home" component={home} />
        <Route path="/one/movie" component={movie} />
        <Route path="/one/book" component={book} />
        <Route path="/one/music" component={music} />
      </Layout>
    )
  }
}
export default OneIndex