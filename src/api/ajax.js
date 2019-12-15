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
import { Indicator } from 'mint-ui'

const instance = axios.create({
  // baseURL: 'http://localhost:4000', // 出跨域请求问题
  baseURL: '/api', // 让代理服务器转发请求4000
  timeout: 20000 // 4. 配置请求超时的时间
})

//添加请求拦截器
instance.interceptors.request.use((config)=>{

  // 显示请求loading
  Indicator.open()


  //对请求体参数进行urlencode处理,而不是使用默认的json方法(后台不支持)
  console.log('req interceptor')
  const data = config.data
  if(data instanceof Object){
    config.data = qs.stringify(data)
  }

  //返回config配置对象
  return config
})
//添加响应拦截器
instance.interceptors.response.use(
 //响应拦截成功的请求
 response => {
   // 隐藏请求loading
   Indicator.close()
    //成功的请求返回的为response.data
    return response.data
 },
 //响应拦截失败的请我
 error => {
    // 隐藏请求loading
    Indicator.close()
    
   alert('请求出错:'+error.message)
   //返回一个pending状态的promise中断promise链
   return new Promise(()=>{})
 },
)


export default instance

