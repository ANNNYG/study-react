import {
    createStore,
    combineReducers,
    applyMiddleware,//使用中间件
} from 'redux'
//支持异步action
import thunk from 'redux-thunk'

import easyRedux from '@/views/easyRedux/slice.js'
import todo from '@/views/Todo/redux/reducer.js'

//将所有的reducers封装到一个对象中
const allReducers = {
    /*  
        这里把state中的customList字段与customListReducer对应起来，
        相当于customListReducer就只在乎customList这个字段就行了 
    */
    easyRedux,
    todo,
}
/* 
使用redux包中提供的combineReducers函数，来鉴别reducer  
    合并Reducer
*/
const rootReducer = combineReducers(allReducers)
// 创建一个全局store用来保存全局状态
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store