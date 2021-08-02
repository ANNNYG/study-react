import React from 'react'
import { Button } from 'antd'

import UseCountHook from './hook/UseCountHook'

export default function index() {
    const { count, add1, add10, reduce1, reduce10 } = UseCountHook()

    return (
        <div style={{ padding: 30 }}>
            <h1>{count}</h1>
            <Button onClick={() => add1()}>加1</Button>
            <Button onClick={() => reduce1()}>减1</Button>
            <Button onClick={() => add10()}>加10</Button>
            <Button onClick={() => reduce10()}>减10</Button>
        </div>
    )
}
