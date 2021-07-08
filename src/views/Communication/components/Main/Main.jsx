import React, { useEffect } from 'react'
import './index.css'
import { Checkbox } from 'antd';
import ShowEvent from '../ShowEvent/ShowEvent'


/* 知识点
    setState是异步更新的，使用回调函数形式更改数据可以做到同步
    或者使用useEffact
    setState回调函数参数为旧数据
*/

export default function Main(props) {
    const list = props.list
    //设置 indeterminate 状态，只负责样式控制
    const [indeterminate, setIndeterminate] = React.useState(true);
    //是否全选state
    const [checkAll, setCheckAll] = React.useState(false);
    //item是否被选中
    const [checkedList, setCheckedList] = React.useState([]);
    /* 组件更新就会调用 ,解决setState异步更新问题*/
    useEffect(() => {
        setIndeterminate(!!checkedList.length && checkedList.length < list.length);
        setCheckAll(checkedList.length === list.length && checkedList.length != 0);
    })
    /* 全选 */
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? props.list : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    }
    /* 单选 */
    const handleCheckItem = (event, value) => {
        event[0]
            ? setCheckedList(() => [...checkedList, ...event])
            : setCheckedList(() => checkedList.filter(item => item != value))
    }
    return (
        <div>
            <div className='checkAllBox'>
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    全选
                </Checkbox>
            </div>
            {props.list.map((item, index) =>
                <ShowEvent
                    key={index}
                    item={{ item, index }}
                    handleCheckItem={handleCheckItem}
                    value={checkedList}
                />)}
        </div>
    )
}
