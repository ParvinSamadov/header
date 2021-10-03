import { useState } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function App() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const burgerClickHandler = () => {
    setOpenMenu(true);
  };
  const closeClickHandler = () => {
    setOpenMenu(false);
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler />
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
        <button onClick={burgerClickHandler}>open</button>
      </Navbar>
      <div className={`burger-menu ${isOpenMenu ? "active-transform" : ""}`}>
        <div className="burger-menu__empty"></div>
        <div className="burger-menu__main">
          <button onClick={closeClickHandler}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default App;
