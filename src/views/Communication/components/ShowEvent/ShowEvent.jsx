import React, { useState } from 'react'
import { Button } from 'antd'
import { Checkbox } from 'antd';

import './index.css'

const CheckboxGroup = Checkbox.Group;

export default function ShowEvent(props) {
    const plainOptions = [{ label: '', value: props.item.item }]

    const onChange = (list) => {
        console.log(list)
        props.handleCheckItem(list,props.item.item)
    }

    return (
        <div className='ShowEvent'>
            <CheckboxGroup options={plainOptions} value={props.value} onChange={onChange} style={{ marginLeft: '20px' }} />
            <p>{props.item.item}</p>
            <Button type="primary" danger>删除</Button>
        </div>
    )
}
