import React from 'react'
/* 引入高阶组件函数 */
import PositionHoc from './PositionHoc'


const AComponent = (props) => {
    return (
        < >
            <div>鼠标的横坐标:{props.posX}</div>
            <div>鼠标的纵坐标:{props.posY}</div>
        </>
    )
}

const BComponent = (props) => {
    return (
        <>
            <h2 style={{ marginTop: '30px' }}>鼠标的坐标是{props.posX},{props.posY}</h2>
        </>
    )
}
/* 将以上两个组件作为参数传入高阶组件函数，以上两个组件只负责页面的渲染 */
let UseHocA = PositionHoc(AComponent)
let UseHocB = PositionHoc(BComponent)


export default function index() {
    return (
        <div style={{ padding: '40px' }}>
            <h1 style={{ marginBottom: '30px' }}>高阶组件HOC</h1>
            <UseHocA />
            <UseHocB />
        </div>
    )
}

