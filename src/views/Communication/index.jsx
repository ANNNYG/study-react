import React, { useState } from 'react'

import './index.css'
/* 引入子组件 */
import AddEvent from './components/AddEvent'
import Main from './components/Main/Main'

export default function Index() {
    const [list, setList] = useState([])

    const addItems = (item) => {
        setList([...list, item])
    }
    /* 删除某一项 */
    const removeSomeone = (value) => {
        setList(() => list.filter(v => v != value))
    }
    /* 删除选中 */
    const removeChecked = (arr) => {
        setList(() => list.filter(v => arr.indexOf(v) == -1))
    }
    return (
        <div className='chactOutside'>
            <div className='content'>
                <p className='chactP'>组件间通信</p>
                <AddEvent addItems={addItems} />
                <Main
                    removeSomeone={removeSomeone}
                    list={list}
                    removeChecked={removeChecked}
                />
            </div>
        </div>
    )
}
