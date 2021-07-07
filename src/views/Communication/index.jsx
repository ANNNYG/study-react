import React from 'react'

/* 引入子组件 */
import AddEvent from './components/AddEvent'

export default function index() {
    return (
        <div>
            组件间通信
            <AddEvent />
        </div>
    )
}
