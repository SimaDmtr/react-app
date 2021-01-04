import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../Hocs/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //В пропсах лежат оъекты withRouter, достаём userId из match.params переданный через Route path
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 6782;
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

//Оборачиваем контейнер функцией withRouter для отслеживания URLa
export default compose(connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus
}), withRouter, withAuthRedirect)(ProfileContainer)