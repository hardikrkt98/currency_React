import React from "react";
import ProfileContext from "../contexts/profileContexts";


//COMPONENT WHICH RETURN THE OTHER COMPONENT IS CALLED HIGHER ORDER COMPOENT


// ANYCOMPONENT CALLS PROFILE ------> CALL WENT TO WITH PROFILE -------> WITHPROFILE CALLS PROFILE COMPONENT WITH

function withProfile(BaseComponent)
{
 return function (props) {
return (
    <ProfileContext.Consumer>
        {({profile,updateProfile})=>(
            <BaseComponent
                {...props}
                profile={profile}
                updateProfile = {updateProfile}
            />
        )}

    </ProfileContext.Consumer>
)

 }



}

export  default withProfile;

