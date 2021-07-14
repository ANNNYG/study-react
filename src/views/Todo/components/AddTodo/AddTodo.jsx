import React, { useState, useEffect } from 'react'
import { Button, Input, Row, Col } from 'antd'
import { connect } from 'react-redux'

import { ADD_Event, Delete_moreEvent } from '../../redux/action'

let AddTodo = (props) => {

    const [eventName, setEventName] = useState('')
    const [remark, setRemark] = useState('')


    const handleAdd = () => {
        props.dispatch(ADD_Event({ name: eventName, remark, key: new Date() }))
        setEventName('')
        setRemark('')
    }

    const handleDelete = () => {
        props.dispatch(Delete_moreEvent())
    }

    return (
        <div>
            <Row justify='center'>
                <Col>
                    <Input
                        style={{ width: '300px' }}
                        placeholder='请输入要新增的事件'
                        value={eventName}
                        onChange={(e) => { setEventName(e.target.value) }}
                    />
                    <Input
                        style={{ width: '300px' }}
                        placeholder='请输入事件的备注'
                        value={remark}
                        onChange={(e) => { setRemark(e.target.value) }}
                    />
                    <Button onClick={handleAdd}>新增</Button>
                    <Button danger type='primary' onClick={handleDelete}>删除选中</Button>
                </Col>
            </Row>
        </div>
    )
}
const AddTodoState = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(AddTodoState)(AddTodo)
