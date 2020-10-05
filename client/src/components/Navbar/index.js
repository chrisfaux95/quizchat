import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
                <NavbarBrand><img className="logo" src="logo.png" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/roomlist" component={NavLink}>Room List</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/highscores" component={NavLink}>High Scores</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Games
                            </DropdownToggle>
                            <DropdownMenu right id="drop-down">
                                <Link to="/quiz"
                                id="dropdown" component={DropdownItem}>Quiz</Link>
                                <Link to="/minesweeper" component={DropdownItem}>Minesweeper</Link>
                                <Link to="/tictactoe" component={DropdownItem}>Tic-Tac-Toe</Link>
                                <Link to="/sudoku" component={DropdownItem}>Sudoku</Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;