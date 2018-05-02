import React from 'react'
import api from './api/home'
import { connect } from 'react-redux'
import getIdList from '../../redux/actions/one.js'
import PropTypes from 'prop-types'
class One_Home extends React.Component {
  static propTypes = {
    idList: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      date: '',
      list: {
        content_list:[]
      }
    }
    this.ActionIdList = this.ActionIdList.bind(this)
    this.getOneList = this.getOneList.bind(this)
  }
  componentDidMount() {
  }
  async componentWillMount() {
    await this.ActionIdList()
    await this.getOneList()
  }
  async ActionIdList() {
    let IdListresult = await api.idlist()
    this.setState({
      date: IdListresult.data[0]
    })
  }
  async getOneList() {
    let date = this.state.date
    let result = await api.onelist(date)
    console.log(result.data)
    this.setState({
      list: result.data
    })
  }
  render() {
    return (
      <div>
        {this.state.list.content_list.map((item, index) => {
          console.log(item)
        })}
        {console.log(this.state.list)}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    idList: state.one.idList
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ActionIdList: () => {
      dispatch(getIdList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(One_Home) 