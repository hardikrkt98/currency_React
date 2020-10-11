import React from "react";
import EditProfile from './EdifProfile';
import ProfileInfo from './ProfileInfo';
class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            profile :{
                name:'Hardik',
                email:'sunsee@as.com',
                phone:'9787897979'


            },
            isEditing : false,
        }
    }

    updateProfile = newProfile=>{
        const {profile} = this.state;
        console.log(this.state.profile);
        console.log(newProfile);
        this.setState({
           profile: {
               ...profile,
               ...newProfile,
           }
        })

    };


    render() {
        const {isEditing} = this.state;


        return (
            <div>
             <div>
                 {isEditing? this._editUI():this._infoUI()}

             </div>

                <button onClick={this._toggleEdit}>

                    {isEditing? 'Close Editor':"Edit Profile"}

                </button>

            </div>




        )



    }

    _toggleEdit=()=>
    {
        this.setState({

            isEditing : !this.state.isEditing

        });

    };


    _editUI() {
        return <EditProfile profile = {this.state.profile} onUpdate={this.updateProfile}/>;
    }

    _infoUI() {

        return <ProfileInfo profile = {this.state.profile} />;
    }
}
export default Profile;
