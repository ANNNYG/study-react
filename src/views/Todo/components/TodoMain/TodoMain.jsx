import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Table, Space, Button } from 'antd'

import { setChecked, Delete_event } from '../../redux/action'

let TodoMain = (props) => {
    const [selectionType, setSelectionType] = useState('checkbox');
    //选择框回调
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            props.dispatch(setChecked(selectedRows))
        },
        //配置表格某一行选择框是否禁用
        getCheckboxProps: (record) => {
            console.log(record, 'record')
            return {
                disabled: record.name === '000',
                name: record.name,
            }
        },
    };
    const columns = [
        {
            title: '事件名字',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '事件备注',
            dataIndex: 'remark',
            key: 'remark'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={(event) => handleDalete(event, record)}>Delete</Button>
                </Space>
            )
        },

    ]
    const handleDalete = (e, record) => {
        setSelectionType(false)
        props.dispatch(Delete_event(record))
    }
    return (
        <div>
            <Table
                style={{ height: '100%' }}
                columns={columns}
                dataSource={props.todo.list}
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
            />
        </div>
    )
}
const TodoMainState = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(TodoMainState)(TodoMain)
