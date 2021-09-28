import React, { useState } from 'react'
import { MenuBtn } from '../MenuBtn/MenuBtn'
import { TaskLists } from '../TaskLists/TaskLists'
import { TaskOrList } from '../TaskOrList/TaskOrList'
import { Today } from '../Today/Today'
import { Heading } from '../heading/Heading'
import './Home.css'

export const Home = ({tasks}) => {
    const [menuBtnPressed, isMenuBtnPressed] = useState (false)

    const handleMenuBtn = () => {
        isMenuBtnPressed(!menuBtnPressed)
    }

    return (
        <div className="home">
            <Today tasks={tasks} />
            <TaskLists />
            {menuBtnPressed && <TaskOrList/>}
            <MenuBtn handleMenuBtn={handleMenuBtn} menuBtnPressed={menuBtnPressed} />
        </div>
    )
}