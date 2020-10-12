import React from "react";
import ProfileContext from '../contexts/profileContexts';
import withProfile from "../HOC/WithProfile";
//Context provide two components {Provider} {Consumer} ->
//Provdier provides state to the component for the context

//Consumer consumers the state of the component


function ProfileInfo({profile,updateProfile})
{
    return (   <div>
                    <span>Name:{profile.name}</span>
                    <span>Name:{profile.email}</span>
                    <span>Name:{profile.phone}</span>
                </div>
          );
}

export default withProfile(ProfileInfo);
