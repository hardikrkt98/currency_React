import React from "react";
import EditPhone from './EditPhone';

function EditProfile({profile,onUpdate})
{
    console.log("phone"+profile.phone);

    return (
        <div>

            <EditPhone phone = {profile.phone}
            onUpdate= {onUpdate}
            />

        </div>



    );

}

export default EditProfile;
