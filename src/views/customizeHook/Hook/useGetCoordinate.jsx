import { useState, useEffect } from 'react'

/* 自定义hook首字母一定要大写，且以Use开头，不然会报错 */
const UseGetCoordinate = () => {
    const [postion, setPosition] = useState({ x: 0, y: 0 })
    /* 添加事件监听 */
    useEffect(() => {
        const setMousePostion = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', setMousePostion)
        /* 销毁事件监听 */
        return () => {
            console.log('组件已经销毁')
            document.removeEventListener('mousemove', setMousePostion)
        }
    }, [])

    return postion
}
export default UseGetCoordinate

