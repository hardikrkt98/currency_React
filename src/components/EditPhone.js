import React from "react";
import ProfileContext from '../contexts/profileContexts';

class EditPhone extends React.Component
{
    constructor(props) {
        super(props);

        this.state={
            val :   ' '



        }
    }

    handleChange = event => {
       // console.log(event.target.value);
        this.setState({val:event.target.value});
      //  console.log(this.state);



    };

    handlesubmit=event=>{
        event.preventDefault();
      this.props.onUpdate({phone:this.state.val});
    };



    render() {
        const value = this.state.val;
        return (
            <ProfileContext.Consumer>
                {({Profile,updateProfile}) =>(
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


                    )
                }



            </ProfileContext.Consumer>
        );



    }


}

export default EditPhone;
