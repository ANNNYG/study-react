import React, { Component } from 'react'

import RenderPropsComponents from './RenderPropsComponents'
import MouseMove from './MouseMove'


export default class index extends Component {
    
    render() {
        return (
            <div style={{ padding: 100 }}>
                <h1>移动鼠标!</h1>
                <RenderPropsComponents render={position => (
                    <MouseMove position={position} />
                )} />
            </div>
        )
    }
}

