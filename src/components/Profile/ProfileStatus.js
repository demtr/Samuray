import {Component} from "react";
import c from "./Profile.module.css";


class ProfileStatus extends Component {
    state = {
        editStatus: false
    }

    setEditMode() {
        this.setState({
            editStatus: !this.state.editStatus
        });
    }

    render() {
        return <div>
            <div className={c.status}>Статус:</div>
            {!this.state.editStatus &&
                <div onDoubleClick={this.setEditMode.bind(this)}>{this.props.text}</div>}
            {this.state.editStatus &&
                <div><input onBlur={this.setEditMode.bind(this)}
                            autoFocus={true}
                            type="text" value={this.props.text}/></div>}
        </div>;
    }
}


export default ProfileStatus;

