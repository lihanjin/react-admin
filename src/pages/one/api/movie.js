
import Server from '../../../common/services/axios'
import log from '../../../common/services/logger'
class Api extends Server {
  /**
   * 获取电影列表
   * 
   * @returns 
   * @memberof Api
   */
  async getMovie() {
    try {
      let result = await this.axios('get', `/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`)
      if (result.res === 0) {
        return result
      } else {
        let err = {
          tip: '获取最新 movie失败',
        }
        log.warn(err)
        throw err
      }
    } catch (error) {
      throw error
    }
  }
  /**
   * 获取历史电影数据
   * 
   * @param {String} id 
   * @returns {Object}
   * @memberof Api
   */
  async getHistory(id) {
    try {
      let result = await this.axios('get', `/channel/movie/more/${id}?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`)
      if (result.res === 0) {
        return result
      } else {
        let err = {
          tip: '获取最新 历史movie失败',
        }
        log.warn(err)
        throw err
      }
    } catch (error) {
      throw error
    }
  }
}


export default new Api()