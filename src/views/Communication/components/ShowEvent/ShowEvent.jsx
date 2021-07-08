import React, { useState } from 'react'
import { Button } from 'antd'
import { Checkbox } from 'antd';

import './index.css'

const CheckboxGroup = Checkbox.Group;

export default function ShowEvent(props) {
    const plainOptions = [{ label: '', value: props.item }]
    const [checkedList, setCheckedList] = React.useState([]);

    const onChange = (list) => {
        setCheckedList(list)
        console.log(list)
    }

    return (
        <div className='ShowEvent'>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} style={{ marginLeft: '20px' }} />
            <p>{props.item}</p>
            <Button type="primary" danger>删除</Button>
        </div>
    )
}
