/* 
对axio进行2次封装一个能发ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
5. 通过请求头携带token数据
axios.create([config]): 创建一个新的axios(它没有下面的功能)
*/

import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  // baseURL: 'http://localhost:4000', // 出跨域请求问题
  baseURL: '/api', // 让代理服务器转发请求4000
  timeout: 20000 // 4. 配置请求超时的时间
})

//添加请求拦截器

//添加响应拦截器


export default instance

