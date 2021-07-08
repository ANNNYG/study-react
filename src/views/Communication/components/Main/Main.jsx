import React, { useEffect } from 'react'
import './index.css'
import { Checkbox } from 'antd';
import ShowEvent from '../ShowEvent/ShowEvent'

export default function Main(props) {
    //设置 indeterminate 状态，只负责样式控制
    const [indeterminate, setIndeterminate] = React.useState(true);
    //是否全选state
    const [checkAll, setCheckAll] = React.useState(false);
    //item是否被选中
    const [checkedList, setCheckedList] = React.useState([]);
    /* 点击全选 */
    useEffect(() => {
        setIndeterminate(!!checkedList.length && checkedList.length < props.list.length);
        setCheckAll(checkedList.length === props.list.length);
    })
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? props.list : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    }
    const handleCheckItem = (event, value) => {
        let arr = checkedList
        event[0]
            ? arr = [...arr, ...event]
            : arr = arr.filter((item) => item != value)
        setCheckedList(arr)
        setIndeterminate(!!arr.length && arr.length < props.list.length);
        setCheckAll(arr.length === props.list.length);
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
