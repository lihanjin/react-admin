import React from 'react'
import api from './api/movie'

class Movie_Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: {}
    }
    this.getMovieDetail = this.getMovieDetail.bind(this)
  }
  componentWillMount() {
    this.getMovieDetail()
  }
  async getMovieDetail() {
    console.log(this.props)
    let id = this.props.location.search.split('=')[1]
    let result = await api.MovieDetail(id)
    console.log(result)
  }
  render() {
    return (
      <div className="movie-detail">
        111
      </div>
    )
  }
}
export default  Movie_Detail