import {Component} from "react";
import c from "./Profile.module.css";


class ProfileStatus extends Component {
    state = {
        editStatus: false,
        userStatus: this.props.text
    }

    setEditModeOn = () => {
        this.setState({
            editStatus: true
        });
    }
    setEditModeOff = () => {
        this.setState({
            editStatus: false
        });
        this.props.updateStatus(this.state.userStatus);
    }
    onStatusChange = (e) => {
        this.setState({userStatus: e.target.value});
    }

    render() {
        return <div>
            <div className={c.status}>Статус:</div>
            {!this.state.editStatus &&
                <div onDoubleClick={this.setEditModeOn}>{this.props.text || "нет"}</div>}
            {this.state.editStatus &&
                <div><input onBlur={this.setEditModeOff}
                            autoFocus={true}
                            onChange={this.onStatusChange}
                            type="text" value={this.state.userStatus}/></div>}
        </div>;
    }
}


export default ProfileStatus;

