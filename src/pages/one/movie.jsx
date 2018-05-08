import React from 'react'
import api from './api/movie'
import { List, Avatar, Button, Spin } from 'antd'
import { Link } from 'react-router-dom'
// import BreadcrumbComponent from '@/component/Breadcrumb/index'
class One_Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: [],
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    }
  }
  componentWillMount() {
    api.getMovie()
      .then(res => {
        console.log(res)
        this.setState({
          movieList: res.data,
          loading: false
        })
      })
  }
  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    api.getHistory(this.state.movieList[9].id)
      .then(res => {
        console.log(res)
        const data = this.state.movieList.concat(res.data)
        this.setState({
          movieList: data,
          loadingMore: false
        }, () => {
          window.dispatchEvent(new Event('resize'));
        })
      })
  }
  componentDidMount() {

  }
  render() {
    const { loading, loadingMore, showLoadingMore, movieList } = this.state;
    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    ) : null;
    return (
      <div>
        {/* <BreadcrumbComponent BreadcrumbList={['影视']}></BreadcrumbComponent> */}
        <div className="movie-box">
          <List
            className="demo-loadmore-list"
            loading={loading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={movieList}
            renderItem={item => (

              <List.Item actions={[<Link to={`/one/movie/movieDetail?item_id=${item.item_id}`}>edit</Link>, <Link to={`/one/movie/movieDetail?item_id=${item.item_id}`}>more</Link>]}>
                <List.Item.Meta
                  avatar={<Avatar src={item.img_url} />}
                  title={item.subtitle}
                  description={item.title}
                />
                <div>{item.forward}</div>
              </List.Item>

            )}
          />
        </div>
      </div>
    )
  }
}

export default One_Movie