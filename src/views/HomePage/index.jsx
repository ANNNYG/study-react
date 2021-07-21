/*
 *@description: 
 *@author: PortKas 
 *@date: 2021-07-21 15:40:21
 *remark: 路由导航页
*/

import React from 'react'
import './index.css'

import { Switch, Route, Redirect, useHistory } from "react-router-dom"
import { Menu } from 'antd'; //组件库引入导航栏

//引入自定义组件
import HomeLeft from '../Home/index'
import SonHome from '../SonHome/index'
import Communication from '../Communication/index'
import EasyRedux from '@/views/easyRedux/index'
import Todo from '@/views/Todo/index'
import Hoc from '@/views/Hoc/index'


const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];


export default function HomePage() {
    const history = useHistory()
    const [openKeys, setOpenKeys] = React.useState(['sub1']);
    //导航栏改变
    const onOpenChange = keys => {
        console.log(keys)
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const handeClick = (event) => {
        console.log(event)
        history.push('/home/' + event.key)
    }
    return (
        <div className='HomeOutside'>
            <div className='homeLeft'>
                <Menu mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    onClick={handeClick}
                >
                    <SubMenu key="sub1" title="初级内容">
                        <Menu.Item key="home">主页</Menu.Item>
                        <Menu.Item key="SonHome">简介</Menu.Item>
                        <Menu.Item key="Communication">组件间通信</Menu.Item>
                        <Menu.Item key="EasyRedux">简单使用redux</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="中级内容">
                        <Menu.Item key="Todo">组件通信使用redux</Menu.Item>
                        <Menu.Item key="HOC">高阶组件</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title="高级内容">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>

            </div>
            <div className='leftBox'>
                <Switch>
                    <Route exact path='/home/home'>
                        <HomeLeft></HomeLeft>
                    </Route>
                    <Route exact path='/home/SonHome'>
                        <SonHome></SonHome>
                    </Route>
                    <Route exact path='/home/Communication'>
                        <Communication></Communication>
                    </Route>
                    <Route exact path='/home/EasyRedux'>
                        <EasyRedux></EasyRedux>
                    </Route>
                    <Route exact path='/home/Todo'>
                        <Todo></Todo>
                    </Route>
                    <Route exact path='/home/Hoc'>
                        <Hoc></Hoc>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
