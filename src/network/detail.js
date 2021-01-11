/*
 * @Author: your name
 * @Date: 2021-01-05 17:32:22
 * @LastEditTime: 2021-01-07 11:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\detail.js
 */
/*
 * @Author: chenjiao
 * @Date: 2021-01-05 17:32:22
 * @LastEditTime: 2021-01-05 18:17:01
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情页的网络请求封装
 * @FilePath: \supermall\src\network\detail.js
 */
import request  from "./request"

export function getDetail(iid){
  return request({
    url:"/detail",
    params:{
      iid
    }
  })
}

// 商品数据整合
export class goods{
  constructor(columns,itemInfo,shopInfo){
    this.columns = columns;
    this.itemInfo = itemInfo;
    this.shopInfo = shopInfo
  }
}

//店铺数据
export class Shop{
  constructor(shopInfo){
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods

  }
}