import Server from '../../../common/services/axios'
import log from '../../../common/services/logger'

class Api extends Server {
  /**
 * 获取最新 readinglist
 * url：http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android
 * @class Api
 * @extends {Server}
 */
  async getReadingList() {
    try {
      let result = await this.axios('get', '/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
      if (result.res === 0) {
        return result
      } else {
        let err = {
          tip: '获取最新 readinglist失败',
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