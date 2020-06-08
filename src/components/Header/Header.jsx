import React from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import logo from '../../logo.svg'
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <Navbar className={s.header} bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    className="d-inline-block align-top"
                />{' '}
                Social Network
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                {props.isAuth
                    ? <Navbar.Text>
                        Signed in as: <NavLink to={'/'}>{props.login}</NavLink>
                    </Navbar.Text> : <NavLink to={'/login'}>login</NavLink>}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;