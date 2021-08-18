import request from './request'

//获取天气
export const getWeather = () => request({
    method:'get',
    url:'http://wthrcdn.etouch.cn/weather_mini?citykey=101280601',
})