import Axios from 'axios'

let root

if (process.env.NODE_ENV !== 'production') {
  // 开发环境
  root = 'http://120.76.154.100:9020'
} else {
  // 生产环境
  root = 'http://120.76.65.16:9020'
}

const service = Axios.create({
  baseURL: root,
  transformRequest: [function (data) {
    // return Qs.stringify(data)
    let newData = ''
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
      }
    }
    return newData
  }]
})

// axios 请求拦截器
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// axios 响应拦截器
service.interceptors.response.use(res => {
  if (res.data.ret === 500) {

  }
  // 判断用户登录是否失效
  if (res.data.ret === -5) {

  }
  return res
}, err => {
  return Promise.reject(err)
})

export default service
