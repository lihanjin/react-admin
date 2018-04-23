import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Icon} from 'antd'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
// console.log(typeof antIcon)
class Spin_Component extends React.Component{
  static defaultProps = {
    size: 'large',
    tips: 'loading...',
    indicator: antIcon
  }
  static propTypes = {
    size: PropTypes.string,
    tips: PropTypes.string
  }
  render() {
    return (
      <div className="spin">
        <Spin size={this.props.size} tip={this.props.tips} indicator={this.props.indicator} />
      </div>
    )
  }
}
export default Spin_Component