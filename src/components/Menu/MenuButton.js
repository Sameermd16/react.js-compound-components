
import Button from '../Button/Button'
import { MenuContext } from './Menu'
import React from "react"


function MenuButton(props) {

    console.log("props in menu: ", props)
    const {toggle} = React.useContext(MenuContext)

    return (
        <Button onClick={toggle}>{props.children}</Button>
    )
}

export default MenuButton