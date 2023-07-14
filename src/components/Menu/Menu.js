// import { useState, Children } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from './MenuDropdown'
import Button from '../Button/Button'
import React from 'react'

const MenuContext = React.createContext()

function Menu(props) {

    const [open, setOpen] = React.useState(false)

    function toggle() {
        console.log("btn clicked")
        setOpen((currentState) => {
            return currentState =!currentState
        })
    }
    // return (
    //     <div className="menu">
    //         {props.children}
    //     </div>
    // )
    return (
        <MenuContext.Provider value={{open, toggle}}>
            <div className="menu">
                {props.children}
            </div>
        </MenuContext.Provider>
    )
}

export default Menu
export { MenuContext }

{/* <div className="menu">
    {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
            open,
            toggle
        })
    })}
</div> */}