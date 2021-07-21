import React from 'react'

/* 
    高阶组件，本质上是一个函数，只负责逻辑层的处理，渲染什么完全取决于传入的组件,
    如果返回的是函数式组件则不能使用hook
    函数式组件实现类似高阶组件的功能需要使用自定义hook
*/

export default function PositionHoc(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                posX: 0,
                posY: 0
            }
        }
        /* 组件挂载时候添加监听 */
        componentDidMount() {
            document.addEventListener('mousemove', this.mouseMove)
        }
        /* 组件卸载时销毁监听 */
        componentWillUnmount() {
            document.removeEventListener('mousemove', this.mouseMove)
        }
        mouseMove = (event) => {
            this.setState({ posX: event.clientX, posY: event.clientY })
        }
        render() {
            return <Component {...this.state} />
        }
    }

}
