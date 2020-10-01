import React, { useState } from "react";
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
    NavbarText
} from "reactstrap";
import "./style.css";

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" expand="md">
                <NavbarBrand><img className="logo" src="Triviatastic.png" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/roomlist">Room List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/highscores">High Scores</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Games
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/quiz" id="dropdown">
                                    Quiz
                </DropdownItem>
                                <DropdownItem href="/minesweeper">
                                    Minesweeper
                </DropdownItem>
                                <DropdownItem href="/ttts">
                                    Tic-Tac-Toe
                                    </DropdownItem>
                                <DropdownItem href="/sodoku">
                                    Sodoku
                                    </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;