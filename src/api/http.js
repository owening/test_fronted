//完成http请求的基本配置
//导入axios
import axios from "axios";

//创建 axios 实例
var instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  //超时时间
  timeout: 2500,
  //基础url，接口服务地址
  baseURL: "http://39.102.48.202:6099/",
});

export default instance;
