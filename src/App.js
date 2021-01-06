import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initApp} from "./redux/appReducer";
import {Spinner} from "react-bootstrap";

class App extends React.Component {
    componentDidMount() {
        this.props.initApp();
    }

    render() {
        if (!this.props.isInit) {
            return <Spinner
                as="span"
                animation="grow"
                size="lg"
                role="status"
                aria-hidden="true"
            />
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" //Передаём айдишник как параметр для match
                               render={() => <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() => <UsersContainer/>}/><
                        Route path="/login"
                              render={() => <Login/>}/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    isInit: state.app.isInit,
})

export default compose(withRouter, connect(mapStateToProps, {initApp}))(App);