
import './App.css';
import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton';
import MenuDropdown from './components/Menu/MenuDropdown';
import MenuItem from './components/Menu/MenuItem';



function App() {
  const sports=["Volleyball", "Pickleball", "Baseball", "Racquetball"]
  return (
    <Menu>
      <MenuButton>sports</MenuButton>
      <MenuDropdown items={sports}>
        {sports.map((sport) => {
          return <MenuItem>{sport}</MenuItem>
        })}
      </MenuDropdown>
    </Menu>
  );
}

export default App;
