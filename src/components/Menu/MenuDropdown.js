


function MenuDropdown(props) {
    console.log(props)
    return (
        <div className="menu-dropdown">
            {props.children}
        </div>
    )
}

export default MenuDropdown