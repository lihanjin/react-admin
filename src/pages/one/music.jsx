import React from 'react'
import api from './api/music'
// import BreadcrumbComponent from '@/component/Breadcrumb/index'
import { Card } from 'antd'
const { Meta } = Card
class One_Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      musicList: []
    }
  }
  componentWillMount() {
    this.getMusicList()
  }
  async getMusicList() {
    let result = await api.getMusicList()
    this.setState({
      musicList: result.data
    })
    console.log(result.data)
  }
  render() {
    return (
      <div>
        {/* <BreadcrumbComponent BreadcrumbList={['音乐']}></BreadcrumbComponent> */}
        <div className="music-list">
          {
            this.state.musicList.map((item, index) => {
              console.log(item)
              return <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.img_url} />}
                key={index}
              >
                <Meta
                  title={item.title}
                  description={item.forward}
                />
              </Card>
            })
          }
        </div>
      </div>
    )
  }
}

export default One_Music