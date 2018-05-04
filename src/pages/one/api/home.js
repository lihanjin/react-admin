
import Server from '../../../common/services/axios'
import log from '../../../common/services/logger'
class Api extends Server {
  /**
 *  用途：上传图片
 *  @url https://elm.cangdu.org/v1/addimg/shop
 *  返回status为1表示成功
 *  @method post
 *  @return {promise}
 */
  // async uploadImg(params = {}){
  //   try{
  //     let result = await this.axios('post', '//elm.cangdu.org/v1/addimg/shop', params); 
  //     if(result && result.status === 1){
  //       return result;
  //     }else{
  //       let err = {
  //         tip: '上传图片失败',
  //         response: result,
  //         data: params,
  //         url: '//elm.cangdu.org/v1/addimg/shop',
  //       }
  //       throw err;
  //     }
  //   }catch(err){
  //     throw err;
  //   }
  // }

  /** 
   * 获取最新 idlist
   * @channel：个人设备品牌，目前已知：nexus6p取值是 wdj，小米取值是 mi，还有莫名其妙的update
   * @version：app 版本号
   * @uuid：个人设备 id，例：ffffffff-a90e-706a-63f7-ccf973aae5ee 注意：前八位字符一定要相同
   * @platform：个人设备平台，目前已知：android/ios/web
   *  或 http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
  */
  async idlist() {
    try {
      let result = await this.axios('get', '/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
      if (result.res === 0) {
        return result
      } else {
        let err = {
          tip: '获取最新 idlist失败',
        }
        log.warn(err)
        throw err
      }
    } catch (error) {
      throw error
    }
  }
  /**
 * 获取 onelist
 * url：http://v3.wufazhuce.com:8000/api/onelist/ + 上面获取的data + /0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android
 */
  async onelist(date) {
    try {
      let result = await this.axios('get', `/onelist/${date}/0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`)
      if (result.res === 0) {
        return result
      } else {
        let err = {
          tip: '获取最新 onelist失败',
        }
        log.warn(err)
        throw err
      }
    } catch (error) {
      throw error
    }
  }
  /**
* 获取 onestory
* url：http://v3.wufazhuce.com:8000/api/onelist/ + 上面获取的data + /0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android
*/
  async onestory(id) {
    try {
      let result = await this.axios('get', `/essay/${id}?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`)
      if (result.res === 0) {
        return result
      } else {
        let err = {
          tip: '获取最新 onestory失败',
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