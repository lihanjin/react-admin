import React from 'react'
import { connect } from 'react-redux'
import api from './api/book'
import { List, Avatar } from 'antd'
// import BreadcrumbComponent from '@/component/Breadcrumb/index'


class One_Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      readingList: []
    }
  }
  componentDidMount() {
    this.getReadingList()
  }
  async getReadingList() {
    let result = await api.getReadingList()
    console.log(result)
    this.setState({
      readingList: result.data
    })
  }
  render() {
    const { readingList } = this.state
    return (
      <div>
        {/* <BreadcrumbComponent BreadcrumbList={['阅读']}></BreadcrumbComponent> */}
        <div className="book-box">
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={readingList}
            // footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
              <List.Item
                key={item.title}
                // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                actions={[<a>edit</a>, <a>more</a>]}
                extra={<img width={272} alt="logo" src={item.img_url} />}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.img_url} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.author.user_name + ' | ' + item.author.desc}
                />
                {item.forward}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    idList: state.idList
  }
}

export default connect(mapStateToProps)(One_Book);