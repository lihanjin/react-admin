import React from 'react'
import { connect } from 'react-redux'
class One_Book extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>One_Book</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    idList: state.idList
  }
}

export default connect(mapStateToProps)(One_Book);