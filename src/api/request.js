import axios from 'axios'

const instance = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    baseURL: '',
    //设置超时
    timeout: 1000,
    /* 请求配置 */
    // `method` 是创建请求时使用的方法
    // `url` 是用于请求的服务器 URL
})
//添加请求拦截器
instance.interceptors.request.use((config) => {
    console.log('请求拦截器~~开始请求了~~', config)
    return config;
}, (error) => {
    console.log('出错啦！！！！', error)
    return Promise.reject(error);
})
//添加响应拦截器
instance.interceptors.response.use((response) => {
    console.log('请求的数据回来啦！！！', response)
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.log('返回的数据出错啦！！！', error)
    return Promise.reject(error);
});
console.log(instance)
export default instance