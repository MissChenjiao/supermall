<!--
 * @Author: chenjiao
 * @Date: 2021-01-05 15:58:23
 * @LastEditTime: 2021-01-11 17:47:13
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情页
 * @FilePath: \supermall\src\views\detail\Detail.vue
-->
<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swper :top-images="topImages"/>
    <detail-goods-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-pics :detail-info="imgList"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwper from './childComps/DetailSwper.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsPics from './childComps/DetailGoodsPics.vue'

import { getDetail , goods , Shop } from '../../network/detail'




  export default {
    name:"Detail",
    components:{
        DetailNavBar,
        DetailSwper,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailGoodsPics
    },
    data(){
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        imgList: []
      }
    },
    created(){
      //1.获得商品id
      this.iid = this.$route.params.iid
      //2.发送网络请求
      getDetail(this.iid).then(res=> {
        console.log(res)
        let data = res.result
        //获取商品轮播图数据
        this.topImages = res.result.itemInfo.topImages 
        //获取商品的数据
        this.goods = new goods(data.columns,data.itemInfo,data.shopInfo)
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //获得商品详情图片列表
        this.detailInfo = data.detailInfo
        this.imgList = data.detailInfo.detailImage
      })
      
    }
  }
</script>

<style lang="scss" scoped>
.detail{
  background-color:#fff;
  position: relative;
  z-index:9;
}
</style>