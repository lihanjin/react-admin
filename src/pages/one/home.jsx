import React from 'react'
import api from './api/home'
import { connect } from 'react-redux'
import getIdList from '../../redux/actions/one.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import BreadcrumbComponent from '@/component/Breadcrumb/index'
import { Card, Icon } from 'antd'
import './style/index.less'
const { Meta } = Card;
class One_Home extends React.Component {
  static propTypes = {
    idList: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      date: '',
      list: {
        content_list: [],
        weather: {
          city_name: '1',
          date: '1',
          climate: '1',
          humidity: '1',
          hurricane: '1',
          temperature: '1',
          wind_direction: '1',
          name: '1'
        }
      },
      list1: {
        list: 1
      },
      isUpdate: false
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
    console.log(result)
    this.setState({
      list: result.data,
      isUpdate: true
    })
  }
  render() {
    return (
      // story 阅读 连载 问答 音乐 影视
      <div>
        {/* <BreadcrumbComponent BreadcrumbList={['首页']}></BreadcrumbComponent> */}
        <div className="card-warp">
          {this.state.list.content_list.map((item, index) => {
            let path
            switch (index) {
              case 1:
                path = 'onestory'
                break;
              case 2:
                path = 'bookDetail'
                break;
              case 3:
                path = 'easy'
                break;
              case 4:
                path = 'query'
                break;
              case 5:
                path = 'musicDetail'
                break;
              case 6:
                path = 'movieDetail'
                break;
              default: path = ''
                break;
            }
            return <div key={index} className="cardBox" >
              <Link to={`/one/${path}?type=${item.content_type}&item_id=${item.item_id}`}>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="example" src={item.img_url} />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <div style={{ textAlign: 'center' }} className="card-title">
                    {item.title}
                  </div>
                  <Meta

                    title={item.author.user_name || item.pic_info}
                    description={item.forward}
                  />
                </Card>
              </Link>
            </div>
          })}
        </div>
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