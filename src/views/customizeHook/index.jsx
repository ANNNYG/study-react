/*
 *@description: 
 *@author: PortKas 
 *@date: 2021-08-02 15:44:20
 *remark: 自定义hook
*/

import React from 'react'
import Title from './components/Title'
import Content from './components/Content'
/* 
    个人理解：自定义hook是函数式组件的高阶组件
    在高阶组件中要使用class类组件，且无法使用useState等hook
    自定义hook中可以使用useState的hook

    自定义hook只管逻辑，可以达到代码复用的一种效果
*/
const index = () => {
    return (
        <div style={{ padding: '50px' }}>
            <h1>自定义Hook</h1>
            <Title />
            <br />
            <Content />
        </div>
    )
}
export default index
