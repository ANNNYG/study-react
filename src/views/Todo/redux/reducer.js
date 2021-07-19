const dataSource = {
    list: [],
    checkedList: [],
}
export default (state = dataSource, action) => {
    console.log(state, action)
    switch (action.type) {
        /* 添加事件 */
        case 'ADD_event':
            return { ...state, list: state.list.concat(action.obj) }
        /* 删除事件 */
        case 'Delete_event':
            return { ...state, list: state.list.filter(v => v.name != action.obj.name) }
        /* 删除多个事件 */
        case 'Delete_MoreEvent':
            return {
                ...state,
                checkedList: [],
                list: state.list.filter(v => !state.checkedList.some(val => val.name === v.name))
            }
        /* 设置选择 */
        case 'setChecked':
            return { ...state, checkedList: action.obj }
        default:
            return state;
    }
}