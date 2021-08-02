import React, { Component } from 'react'

export default class MouseMove extends Component {
    render() {
        const position = this.props.position
        return (
            <div style={{
                backgroundColor: 'red',
                position: 'absolute',
                left: position.x + 10,
                top: position.y + 10,
                width: 100,
                height: 100
            }}>
            </div>
        )
    }
}
