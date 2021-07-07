import React from 'react'
import { Button } from 'antd';//引入组件库
import { useHistory } from 'react-router-dom' //使用useHistory改变路由

import './index.css' //引入样式文件

export default function LoginPage(props) {
    const history = useHistory()
    const handeClick = () => {
        console.log(1)
        history.push('/home/home')
    }
    return (
        <div className='loginPage'>
            <p className='loginP'>weclome to my react-app</p><br />
            <Button type="primary" className='LoginBtn' onClick={handeClick}>点击进入主页</Button>
        </div>
    )
}
