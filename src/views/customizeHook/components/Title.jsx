import React from 'react'
import UseGetCoordinate from '../Hook/useGetCoordinate'

export default function Title() {
    const position = UseGetCoordinate()
    return (
        <div>
            <h2>鼠标在屏幕中的坐标</h2>
            <h3>鼠标横坐标X为：{position.x}</h3>
            <h3>鼠标纵坐标Y为：{position.y}</h3>
        </div>
    )
}
