import {Component} from "react";
import c from "./Profile.module.css";


class ProfileStatus extends Component {
    state = {
        editStatus: false,
        userStatus: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.status !== prevProps.status) {
            this.setState({userStatus: this.props.status})
        }
    }

    setEditModeOn = () => {
        if (!this.props.isMe) return;
        this.setState({
            editStatus: true
        });
    }
    setEditModeOff = () => {
        this.setState({
            editStatus: false
        });
        if (this.props.status !== this.state.userStatus) {
            this.props.updateStatus(this.state.userStatus);
        }
    }
    onStatusChange = (e) => {
        this.setState({userStatus: e.target.value});
    }

    render() {
        return <div>
            <div className={c.status}>Статус:</div>
            {!this.state.editStatus &&
                <div onDoubleClick={this.setEditModeOn}>{this.props.status || "нет"}</div>}
            {this.state.editStatus &&
                <div><input onBlur={this.setEditModeOff}
                            autoFocus={true} size="50"
                            onChange={this.onStatusChange}
                            type="text" value={this.state.userStatus}/></div>}
        </div>;
    }
}


export default ProfileStatus;

