import React, { Component } from 'react'

export default class RenderPropsComponents extends Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0 }
    }
    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
         e.stopPropagation()
      /*   e.nativeEvent.stopImmediatePropagation(); */
    }
    render() {
        return (
            <div style={{
                height: '50vh',
                width: '800px',
                backgroundColor: 'rgb(255,255,255)'
            }}
                onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
        )
    }
}
