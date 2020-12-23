
import request from "./request.js"
export function getHomeMutation(){
  return request({
    url:"/home/multidata"
  })
}
//1.请求首页的商品数据
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
    
  })
}