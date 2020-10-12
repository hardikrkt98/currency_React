import React from "react";
import EditProfile from './EdifProfile';
import ProfileInfo from './ProfileInfo';
import ProfileContext from '../contexts/profileContexts'
import withProfiler from '../HOC/WithProfile'
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
        const {profile,isEditing} = this.state;


        return (
            //Here we want to provide state , we will wrap the compoenent with context provider

            <ProfileContext.Provider
                value={{
                    profile:profile,
                    updateProfile:this.updateProfile
                }
                }
            >
                <div>
                    <div>{isEditing ? this._editUI() : this._infoUI()}</div>
                    <button onClick={this._toggleEdit}>
                        {isEditing ? 'Close Editor' : "Edit Profile"}
                    </button>
                </div>
            </ProfileContext.Provider>
        )
    }

    _toggleEdit=()=>
    {
        this.setState({

            isEditing : !this.state.isEditing

        });

    };


    _editUI() {
        return <EditProfile />;
    }

    _infoUI() {

        return <ProfileInfo  />;
    }
}
const higherComponent = withProfiler(Profile);
export default higherComponent;
