
/* 增加的action */
export const addNum = (num) => {
    return {
        type: 'ADD_Num_1',
    }
}
/* 减少的action */
export const decreaseNum = () => {
    return {
        type: 'RECREASENUM',
    }
}
/* 输入框 */
export const changeInp = (value) => {
    return {
        type: 'CHANGEINP',
        value
    }
}
/* 指定增加 */
export const addCustomize = () => {
    return {
        type: 'ADDCUSTOMIZE',
    }
}
/* 异步action，就是指action的值为函数 */
export const addAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNum())
        }, 1000);
    }
}