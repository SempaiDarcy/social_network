import React, {ChangeEvent, Component} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {
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
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        // debugger
        // if (prevProps.status !== this.props.status || prevState.status !== this.state.status) {
        // let a = this.state;
        // let b = this.props
        // console.log('componentDidUpdate')
        // }
        if (prevProps.status !== this.props.status) {
            // debugger
            this.setState({
                status: this.props.status
            })
            console.log('componentDidUpdate')
        }
    }

    render() {
        // console.log('render')
        return (
            <div>
                STATUS:
                {!this.state.editMode
                    ? <span onClick={this.activateEditMode}> {this.props.status ? ' ' + this.props.status : ' -'}</span>
                    : <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}
                             onChange={this.onChangeStatus}/>
                }
            </div>
        );
    }


}
