import React, {Component} from 'react';
import {ProfileType} from "../../../../redux/store";

type ProfileStatusPropsType = {
    profile: ProfileType
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }
    activateEditMode ()  {
         this.setState({
             editMode:true
         })
    }
    deactivateEditMode () {
        this.setState({
            editMode:false
        })
    }
    render() {
        console.log(this.state.editMode)
        return (
            <div>
                <h5>STATUS</h5>
                {!this.state.editMode
                    ? <div>
                        <span onClick={this.activateEditMode.bind(this)}>{this.props.profile.aboutMe}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.profile.aboutMe} onChange={()=>{}}/>
                    </div>
                }


            </div>
        );
    }


}
