/*
 * @Author: chenjiao
 * @Date: 2020-12-30 16:23:23
 * @LastEditTime: 2020-12-30 16:26:13
 * @LastEditors: Please set LastEditors
 * @Description: debounce
 * @FilePath: \supermall\src\common\untils\index.js
 */
export function debounce(fn,delay){
    //定义定时器
    let timer = null
    return function(...args){
      if (timer) clearTimeout(timer)
      //重新计时
      timer = setTimeout(()=>{
        fn.apply(this,args)
      },delay)
    }
}