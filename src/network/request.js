import axios from "axios"

//1.创建axios实例
const instance = axios.create({
  // baseURL:'http://localhost:8080',
  baseURL:"http://152.136.185.210:7878/api/m5"
})
//2.1 请求前拦截的作用
instance.interceptors.request.use(config=> {
  return config
},err=>{
  console.log(err);
})

//2.2 响应拦截
instance.interceptors.response.use(res=>{
  return res.data
},err=>{
  console.log(err)
})

export default instance
