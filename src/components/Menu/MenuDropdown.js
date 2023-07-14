
import { MenuContext } from "./Menu"
import React from 'react'

function MenuDropdown(props) {
    console.log("props in menu dropdown: ", props)
    const {open} = React.useContext(MenuContext)
    return open ? (
        <div className="menu-dropdown">
            {props.children}
        </div>
    ) : null 
}

export default MenuDropdown