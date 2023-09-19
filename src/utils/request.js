import axios from 'axios' //引入axios
import notification from 'ant-design-vue/es/notification'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  // baseURL: 'http://49.232.253.214:5000',
  baseURL: 'http://127.0.0.1:5000',
  timeout: 60000 // 请求超时时间
})

// 异常拦截处理器 浏览器
const errorHandler = (error) => {
  console.log("%c Line:16 🥑 error", "font-size:16px;color:#ffffff;background:#e41a6a", error);
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    // const token = storage.get(ACCESS_TOKEN)
    let token
    if (error.response.status === 403) {
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: '登录失效',
        description: data.message || '请重新登录'
      })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
    if (error.response.status === 502 || error.response.status === 500) {
      notification.error({
        message: error.response.status + '服务暂时不可用，请稍后再试 '
      })
      return
    }
    if (data.message && (data.message !== 'Internal Server Error')) {
      notification.error({
        message: '错误原因',
        description: data.message
      })
    } else {
      if (typeof data === 'object') {
        data.message = null
        // notificationError({
        //   message: '失败',
        //   description: '请重试'
        // })
      }
    }
    if (error.code === 'ERR_NETWORK') {
      notification.error({
        message: '网络错误',
        description: '请联系管理员!'
      })
    }
    return Promise.reject(data)
  }
  return Promise.reject(error)
}

request.interceptors.request.use(config => {
  // const token = storage.get(ACCESS_TOKEN)
  let token
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  if (response.data.code && response.data.code === 401) {
    store.dispatch('Logout2').then(() => {
      setTimeout(() => {
        window.location.reload()
      }, 500)
    })
    return response.data
  }
  if (response.data.code && response.data.code !== 200) {
    const errMsg = response.data.message
    if (errMsg && (errMsg !== 'Internal Server Error')) {
      notificationError({
        description: errMsg
      })
    } else {
      if (typeof response.data === 'object') {
        response.data.message = null
      }
    }
    return Promise.reject(response.data)
  }
  return response.data
}, errorHandler)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request
