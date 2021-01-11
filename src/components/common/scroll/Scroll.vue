<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
  export default {
    name:"wrapper",
    props:{
      probeType:{
          type:Number,
          default:1
        },
      pullUpLoad:{
        type:Boolean,
        default:false
      }  
    },
    data(){
      return {
        scroll: null,
        
      }
    },
    mounted(){
      setTimeout(() => {
        console.log('BetterScroll：加载开始')
        this._initScroll()
        console.log('BetterScroll：加载完毕')
      }, 2000)

  },
  methods:{
    //1. 初始化
    _initScroll() { 
     
      //确保wrapper存在，因为执行_initScroll()时，如果this.$refs.wrapper为undefined就会报错
        if (!this.$refs.wrapper) {
          return
        }
        //1.1初始化scroll
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          listenScroll:true,
          mouseWheel: true,
          pullUpLoad:this.pullUpLoad
        })
        // 1.2监听滑动坐标
        this.scroll.on("scroll",(position)=>{
          // console.log(position);
          this.$emit("scroll",position)
        })
        //1.3监听上拉加载
        this.scroll.on("pullingUp",()=>{
          this.$emit("pullingUp")
        })
      },
    // 2.封装finishPullUp（）
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //3.回到顶部
    scrollTo(x,y,time=300){
      // console.log(this.scroll.scrollTo());
         this.scroll && this.scroll.scrollTo(x,y,time)
      },
    //4.封装refresh
    refresh(){
      this.scroll && this.scroll.refresh()
    } ,
    // 5.封装滑动的Y值
    getScrolly(){
      return this.scroll ? this.scroll.y : 0
    }  
  }

  }
</script>

<style lang="scss" scoped>

</style>