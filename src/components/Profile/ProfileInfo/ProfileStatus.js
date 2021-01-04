import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    editModeToggle = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status!== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editModeToggle} type="text"
                               value={this.state.status}/>
                    </div>
                    : <div>
                        <span onClick={this.editModeToggle}>{this.props.status}</span>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus