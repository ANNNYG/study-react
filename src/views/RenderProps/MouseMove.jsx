import React, { Component } from 'react'

export default class MouseMove extends Component {
    render() {
        const position = this.props.position
        return (
            <div style={{
                backgroundColor: 'red',
                position: 'absolute',
                left: position.x-50,
                top: position.y-50,
                width: 100,
                height: 100
            }}>
            </div>
        )
    }
}
