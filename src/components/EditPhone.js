import React from "react";
import ProfileContext from '../contexts/profileContexts';
import withProfile from "../HOC/WithProfile";

class EditPhone extends React.Component
{
    constructor(props) {
        super(props);

        this.state={
            val :   props.profile.phone



        }
    }

    handleChange = event => {
        // console.log(event.target.value);
        this.setState({val:event.target.value});
        //  console.log(this.state);



    };




//YOu cannot access the constructor inside ProfileContext.Consumer to set the initial value :)
    //WE need to use HIgher ORder Compoent to achieve that
    render() {
        const value = this.state.val;
        const {profile,updateProfile} = this.props;
        return (

                    <form onSubmit={(event) =>{event.preventDefault();updateProfile({phone:value})}}>
                        <label>
                            <div>
                                Edit Phone

                            </div>

                            <input onChange={this.handleChange} type='tel' value={value} />
                        </label>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
        );



    }


}

export default withProfile(EditPhone);
