import {
    createStore,
    combineReducers
} from 'redux'

import easyRedux from '@/views/easyRedux/slice.js'


/* 使用redux包中提供的combineReducers函数，来鉴别reducer */
const allReducers = {
    easyRedux,
}
const rootReducer = combineReducers(allReducers)

const store = createStore(rootReducer);

export default store