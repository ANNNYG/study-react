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

    return (
        <div className='chactOutside'>
            <div className='content'>
                <p className='chactP'>组件间通信</p>
                <AddEvent addItems={addItems} />
                <Main list={list} />
            </div>
        </div>
    )
}
