import React from 'react'
import { connect } from 'react-redux';

import todoCss from './index.module.css'

import AddTodo from './components/AddTodo/AddTodo'
import TodoMain from './components/TodoMain/TodoMain'

let Todo = () => {
    return (
        <div className={todoCss.todoOutsideBox}>
            <AddTodo />
            <TodoMain />
        </div>
    )
}
const TodoState = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(TodoState)(Todo)
