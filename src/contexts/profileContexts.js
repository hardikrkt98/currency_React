
import React from 'react';


const ProfileContext = React.createContext(
    {
        Profile:{},
        updateProfile :() => {}
    }

);

export default ProfileContext;
