import React from 'react'
import './index.css'
import { Checkbox } from 'antd';
import ShowEvent from '../ShowEvent/ShowEvent'

export default function Main(props) {
    //设置 indeterminate 状态，只负责样式控制
    const [indeterminate, setIndeterminate] = React.useState(true);
    //是否全选state
    const [checkAll, setCheckAll] = React.useState(false);
    /* 点击全选 */
    const onCheckAllChange = () => {

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
                    item={item}
                />)}
        </div>
    )
}
