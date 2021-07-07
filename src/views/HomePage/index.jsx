import React from 'react'
import './index.css'

import { Switch, Route, Redirect, useHistory } from "react-router-dom"
import { Menu } from 'antd'; //组件库引入导航栏

//引入自定义组件
import HomeLeft from '../Home/index'
import SonHome from '../SonHome/index'



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
                    <SubMenu key="sub1" title="Navigation One">
                        <Menu.Item key="home">主页</Menu.Item>
                        <Menu.Item key="SonHome">简介</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title="Navigation Three">
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
                </Switch>
            </div>
        </div>
    )
}
