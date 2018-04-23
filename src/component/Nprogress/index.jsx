import React from 'react'
import NProgress from 'NProgress'

class NprogressComponent extends React.Component{
  componentWillMount () {
    // dom加载之前
    console.log(NProgress)
    NProgress.start()
  }
  componentDidMount () {
    NProgress.done()
    // 访问真实的DOM
  }
  render() {
    return (
      <div></div>
    )
  }
}

export default NprogressComponent