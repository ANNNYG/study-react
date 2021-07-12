import React from 'react'
import index from './index.module.css'
import { Button } from 'antd'
import store from '@/store/store'

export default function EasyRedux() {
    return (
        <div>
            <div className={index.HomeOutside}>
                This page is show how to easy use redux&nbsp;
                <div className={index.num}>
                    Num:
                </div>
            </div>
            <div className={index.button}>
                <Button>增加1</Button>
                <Button>减少1</Button>
            </div>
        </div>
    )
}
