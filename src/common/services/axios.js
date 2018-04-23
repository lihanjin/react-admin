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
  if(!config || !config.retry) return Promise.reject(err)

  if(!config.shouldRetry || typeof config.shouldRetry != 'function') {
     return Promise.reject(err)
  }

  //判断是否满足重试条件
  if(!config.shouldRetry(err)) {
    return Promise.reject(err)
  }

  // 设置重置次数，默认为0
  config.__retryCount = config.__retryCount || 0

  // 判断是否超过了重试次数
  if(config.__retryCount >= config.retry) {
      return Promise.reject(err)
  }

  //重试次数自增
  config.__retryCount += 1

  //延时处理
  var backoff = new Promise(function(resolve) {
      setTimeout(function() {
          resolve()
      }, config.retryDelay || 1)
  })

  //重新发起axios请求
  return backoff.then(function() {
      return axios(config)
  })
})

export default axios