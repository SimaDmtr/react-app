import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
    //Создаём HOC, который возвращает ту же компоненту, но с новым поведением
    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to="/login"/>;
        return <Component {...props} />;
    };
    return compose(connect(mapStateToPropsRedirect))(RedirectComponent);
};
