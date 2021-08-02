import React from 'react'
import UseGetCoordinate from '../Hook/useGetCoordinate'

export default function Title() {
    const position = UseGetCoordinate()
    return (
        <div>
            <p>鼠标在屏幕中的坐标为:{position.x},{position.y}</p>
        </div>
    )
}