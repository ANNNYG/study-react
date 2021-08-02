import { useState } from 'react'

export default function UseCountHook() {
    const [count, setCount] = useState(0)

    const add10 = () => setCount((pre) => pre + 10)
    const add1 = () => setCount((pre) => pre + 1)
    const reduce1 = () => setCount((pre) => pre - 1)
    const reduce10 = () => setCount((pre) => pre - 10)

    return { count, reduce1, add10, add1, reduce10 }
}
