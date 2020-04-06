import React from 'react';
import {NavLink} from "react-router-dom";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import logo from '../../logo.svg'
import s from './Header.module.css';

const Header = () => {
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
        </Navbar>
    )
}

export default Header;