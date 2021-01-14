<!--
 * @Author: chenjiao
 * @Date: 2021-01-14 15:39:07
 * @LastEditTime: 2021-01-14 18:04:28
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情参数信息
 * @FilePath: \supermall\src\views\detail\childComps\DetailGoodsParams.vue
-->
<template>
  <div class="detailGoodsParams">
    <div
      v-for="tables in rules.tables"
      :key="tables">
      <table>
        <tr v-for="tr in tables" :key="tr.id">
          <td v-for="td in tr" :key="td">{{td}}</td>
        </tr>
      </table>
    </div>
    <table class="info">
      <tr 
      v-for="item in itemParInfo.set"
      :key="item">  
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    
  </div>
</template>

<script>
  export default {
    name:"detailGoodsParams",
    props:{
      itemParInfo:{
        tyep:Object,
        default(){
          return {}
        }
      },
      rules:{
        tyep:Object,
        default(){
          return {}
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
.detailGoodsParams{
  margin: 0 10px;
}
.rule{
  border-bottom:2px solid rgb(100,100,100,0.18) ;
}
table{
  width:100%;
}
table tr{
  display: flex;
  height: 44px;
  line-height: 44px;
  width:100%;
  border-bottom:1px solid rgb(100,100,100,0.12) ;
}
table td{
  flex: 1;
  overflow: hidden;
}
</style>