//包含n个接口请求函数的模块
import ajax from './ajax'

//返回后台接收的地理位置
export const reqAddress = (latitude,longitude) => ajax(`/position/${latitude},${longitude}`)

//获取轮播图的商品列表
export const reqCategorys = () => ajax('/index_category')

//根据地理位置(经纬度)获取商铺列表
export const reqShops = ({latitude,longitude}) => ajax('/shops',{params:{latitude,longitude}}) 

