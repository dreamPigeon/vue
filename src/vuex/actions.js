//包含n个用于间接更新的方法
//方法包含异步与逻辑代码

//利用ajax获取后台的信息
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '@/api'
//引入包含mutations的常亮数据名
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'





export default {
  //获取当前地址对象的异步信息
  async getAddress({commit,state}){
    //从state中获取经纬度信息通过传参state中的解构赋值
    const {latitude,longitude} = state
    //发送异步的请求利用await
    const result = await reqAddress(latitude,longitude)
    //请求成功后交给mutations
    if(result.code===0){
      //获取数据
      const address = result.data
      //交给mutations处理
      commit(RECEIVE_ADDRESS,address)
    }

  },
  //获取商品分类的异步信息
  async getCategorys({commit}, callback){
    //发送异步请求
    const result = await reqCategorys();
    //请求数据成功后交给mutations
    if(result.code===0){
      //获取后台数据
      const categorys = result.data
      //内部同步调用mutations更新状态数据
      commit(RECEIVE_CATEGORYS,categorys)
       // 在数据更新之后, 调用回调函数
       typeof callback === 'function' && callback()

    }
  },
  //获取商品信息的列表根据经纬度的地理信息
  async getShops({commit,state}){
    //从data中获取经纬度的数据
    const {latitude,longitude} = state
    //发送异步请求信息
    const result = await reqShops({latitude,longitude})
    //请求数据成功后交给mutations
    if(result.code===0){
      //获取后台数据
      const shops = result.data
      //利用mutations更新数据状态
      commit(RECEIVE_SHOPS,shops)
    }



  }
}