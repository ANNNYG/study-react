import React from 'react'
import index from './index.module.css'  /* 避免污染全局 */
import { Button, Input } from 'antd'
import { connect } from 'react-redux';

import { addNum, decreaseNum, changeInp, addCustomize, addAsync } from './action'

let EasyRedux = (props) => {
    const addOne = () => {
        props.dispatch(addNum())
    }
    const recreaseOne = () => {
        props.dispatch(decreaseNum())
    }
    const addCustomizeNum = () => {
        props.dispatch(addCustomize())
    }
    const handleInp = (event) => {
        props.dispatch(changeInp(event.target.value))
    }
    const addAsyncOne = () => {
        props.dispatch(addAsync())
    }
    return (
        <div>
            <div className={index.HomeOutside}>
                This page is show how to easy use redux&nbsp;
                <div className={index.num}>
                    Num:{props.easyRedux.num}
                </div>
            </div>
            <div className={index.button}>
                <Button onClick={addOne}>增加1</Button>
                <Button onClick={recreaseOne}>减少1</Button>
                <Button onClick={addAsyncOne}>异步加1</Button>
                <Input
                    placeholder='请输入你想添加的数'
                    onChange={handleInp}
                    style={{ width: '200px' }}
                    value={props.easyRedux.inp}
                />
                <Button onClick={addCustomizeNum}>添加</Button>
            </div>
        </div>
    )
}
//关联习惯列表的props与state，不关联的话全局的state.customList就没法作为props属性传进来
const EasyReduxStatetoProps = (state) => {
    return {
        easyRedux: state.easyRedux
    }
}
// 这个方法是用来绑定dispatch的，这里直接在组件里调用dispatch了，所以就没有用到这个方法
// const mapDispatchToProps = {};

// 使用connect函数包裹组件，从而获得store上下文，可以在组件里使用this.props.dispatch访问到dispatch方法
// ui组件和容器组件建立联系
/*
    简洁写法
    export default connect(EasyReduxStatetoProps)(EasyRedux)
*/
EasyRedux = connect(EasyReduxStatetoProps)(EasyRedux)

export default EasyRedux
