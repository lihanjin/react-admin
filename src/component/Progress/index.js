import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'antd'
let timer = ''
class ProgressLoading extends React.Component{
  static defaultProps = {
    progressPercenter: 0
  }
  static propTypes = {
    progressPercenter: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      progressPercenter: 100
    }
  }
  componentWillMount () {
    // dom加载之前\
    let percent = this.setState.progressPercenter
    timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          progressPercenter: prevState.progressPercenter+1
        }
      })
    },1000)
  }
  componentWillUnmount() {
    // 销毁阶段
    clearInterval(timer)
  }
  render () {
    const progressPercenter = this.state.progressPercenter
    return (
      <div className="progress_loading">
        <Progress percent={progressPercenter} status="active" />
      </div>
    )
  }
}

export default ProgressLoading