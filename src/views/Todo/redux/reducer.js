const dataSource = {
    list: [],
    checkedList: [],
}
export default (state = dataSource, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_event':
            return { ...state, list: state.list.concat(action.obj) }
        case 'Delete_event':
            return { ...state, list: state.list.filter(v => v.name != action.obj.name) }
        case 'Delete_MoreEvent':
            return {
                ...state,
                checkedList: [],
                list: state.list.filter(v => !state.checkedList.some(val => val.name === v.name))
            }
        case 'setChecked':
            return { ...state, checkedList: action.obj }
        default:
            return state;
    }
}