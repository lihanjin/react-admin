import React from 'react'
import api from './api/home'

class One_Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: {}
    }
    this.getOneStory = this.getOneStory.bind(this)
  }
  componentWillMount() {
    this.getOneStory()
  }
  async getOneStory() {
    let result = await api.onestory()
    console.log(result)
  }
  render() {
    return (
      <div className="onestory">
        111
      </div>
    )
  }
}
export default One_Story