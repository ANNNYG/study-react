
/*  定义初始state*/
const defaultState = {
    num: 1,
    inp: '111'
}
/* 
    reducer的本质是一个函数，reducer会接收两个参数，分别为之前的状态和动作对象action
*/

export default (state = defaultState, action) => {
    console.log('state=', state, 'action=', action)
    switch (action.type) {
        case 'ADD_Num_1':
            /* 
            注意，Redux官方文档中严格指出不要直接修改state，所以下面这一句是错误的
                 return state.num + 1        
            */
            return { ...state, num: state.num + 1 }
        case 'RECREASENUM':
            return { ...state, num: state.num - 1 }
        case 'CHANGEINP':
            return { ...state, inp: action.value }
        case 'ADDCUSTOMIZE':
            return { ...state, num: state.num + state.inp * 1 }
        default:
            return state
    }
}
