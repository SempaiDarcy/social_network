import React, {ChangeEvent, Component} from 'react';

type ProfileStatusPropsType = {
    status:string
    updateStatus:(status: string)=>void
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status:this.props.status
    }
    activateEditMode = () => {
         this.setState({
             editMode:true
         })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                STATUS:
                {!this.state.editMode
                    ? <span onClick={this.activateEditMode}> {this.props.status? ' ' + this.props.status:' -'}</span>
                    : <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} onChange={this.onChangeStatus}/>
                }
            </div>
        );
    }


}
