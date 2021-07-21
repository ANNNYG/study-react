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

/* 
    connect 的第一个参数是 mapStateToProps,
    这个函数允许我们将 store 中的数据作为 props 绑定到组件上
     connect 的第二个参数是 mapDispatchToProps
    由于更改数据必须要触发action, 因此在这里的主要功能是将 action 作为props 绑定到 组件上
*/
/* 
    给使用connect方法的组件属性自动绑定了dispatch方法；this.props.dispatch
    给使用connect方法的组件的setState方法自动添加了对仓库的state的订阅
    给使用connect方法的组件的属性绑定仓库的state值；this.props.XXXX
    不再使用store.getState方法
    给使用connect方法的组件的actions自动使用bindActionCreators方法
*/
const TodoMainState = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(TodoMainState)(TodoMain)
