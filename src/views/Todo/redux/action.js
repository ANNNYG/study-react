


export const ADD_Event = (obj) => {
    return {
        type: 'ADD_event',
        obj
    }
}
export const Delete_event = (obj) => {
    return {
        type: 'Delete_event',
        obj
    }
}
export const Delete_moreEvent = () => {
    return {
        type: 'Delete_MoreEvent',
    }
}
export const setChecked = (obj) => {
    return {
        type: 'setChecked',
        obj
    }
}