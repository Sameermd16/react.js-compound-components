
import Button from '../Button/Button'

function MenuButton(props) {
    console.log(props)
    return (
        <Button {...props}>{props.children}</Button>
    )
}

export default MenuButton