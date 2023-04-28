import {TextField} from "@material-ui/core";
import React, {ChangeEvent} from "react";

type ProfileStatusProps = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.props.updateUserStatus(this.state.status)
        this.setState({
            editMode: false
        })
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            <div style={{height: 'max-content', fontWeight: 'bold'}}>
                Status:
                {this.state.editMode
                    ? <TextField value={this.state.status}
                                 onBlur={this.deactivateEditMode}
                                 onChange={this.onChangeStatus}
                                 autoFocus/>
                    : <span style={{fontStyle: 'italic',minWidth: '100px',minHeight: '12px', cursor: 'pointer', fontWeight: 'normal'}} onDoubleClick={this.activateEditMode}>
                        {this.props.status ? ' ' + this.props.status : ' -'}
                </span>
                }
            </div>
        </>
    }
}

