import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateProfileStatusThunkCreator: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatusThunkCreator(this.state.status)
    }
    onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    componentDidUpdate (prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>){

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Add status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.state.status}
                           onChange={this.onStatusChangeHandler}
                           onBlur={this.deActivateEditMode}
                           autoFocus={true}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;