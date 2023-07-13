import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from './MenuDropdown'
import Button from '../Button/Button'


function Menu(props) {

    const [open, setOpen] = useState(false)

    function toggle() {
        console.log("btn clicked")
        setOpen((currentState) => {
            return currentState =!currentState
        })
    }
    return (
        <div className="menu">
            {props.children}
        </div>
    )
}

export default Menu
