import axios from 'axios'
if (process.env.NODE_ENV === 'production') {
  // 干一些线上才要做的事情
}
if (process.env.NODE_ENV === 'development') {
  // 干一些测试时不可告人的事情
}
axios.defaults.headers['Content-Type'] = 'application/json' // 设置请求头
axios.defaults.timeout = 20000 //设置超时时间
axios.defaults.transformRequest = [(data) => {
  return JSON.stringify(data)
}] //格式转换
//请求重试
axios.defaults.retry = 1 //重试次数
axios.defaults.retryDelay = 1000//重试延时
axios.defaults.shouldRetry = (error) => true//重试条件，默认只要是错误都需要重试



// 请求拦截
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(function (response) {
  // Vue.$vux.loading.hide()
  // if (!response || response.status !== 200) return Vue.$vux.alert.show('网络错误')
  // 对响应数据做处理
  return response
}, function (error) {
  // 对响应错误做处理
  return Promise.reject(error)
})

// 响应拦截 重试
axios.interceptors.response.use(undefined, (err) => {
  var config = err.config
  // 判断是否配置了重试
  if (!config || !config.retry) return Promise.reject(err)

  if (!config.shouldRetry || typeof config.shouldRetry !== 'function') {
    return Promise.reject(err)
  }

  //判断是否满足重试条件
  if (!config.shouldRetry(err)) {
    return Promise.reject(err)
  }

  // 设置重置次数，默认为0
  config.__retryCount = config.__retryCount || 0

  // 判断是否超过了重试次数
  if (config.__retryCount >= config.retry) {
    return Promise.reject(err)
  }

  //重试次数自增
  config.__retryCount += 1

  //延时处理
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })

  //重新发起axios请求
  return backoff.then(function () {
    return axios(config)
  })
})
/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://cangdu.org
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
*/

export default class Server {
  axios(method, url, params){
    return new Promise((resolve, reject) => {
      if(typeof params !== 'object') params = {};
      let _option = params;
      _option = {
        method,
        url,
        // baseURL: envconfig.baseURL,
        timeout: 20000,
        params: null,
        data: null,
        headers: null,
        withCredentials: true, //是否携带cookies发起请求
        validateStatus:(status)=>{
            return status >= 200 && status < 300;
        },
        ...params,
      }
      axios.request(_option).then(res => {
        resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
      },error => {
        if(error.response){
            reject(error.response.data)
        }else{
            reject(error)
        }
      })
    })
  }
}