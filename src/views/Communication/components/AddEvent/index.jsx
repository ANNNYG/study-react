import React, { useState } from 'react'

import { Input } from 'antd';
import { Button } from 'antd';
import './index.css'


export default function AddEvent(props) {
    const [inp, setInp] = useState()
    //输入框绑定
    const handeInput = (e) => {
        setInp(e.target.value)
        console.log(inp)
    }
    const handeAdd = () => {
        console.log(inp)
        props.addItems(inp)
        setInp('')
    }
    return (
        <div className='AddEvent_input'>
            <Input
                placeholder="请输入要新增的事件名"
                style={{ width: '334px' }}
                onInput={handeInput}
                value={inp}
            />
            <Button onClick={handeAdd}>新增</Button>
        </div>
    )
}
