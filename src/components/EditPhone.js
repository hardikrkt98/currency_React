import React from "react";


class EditPhone extends React.Component
{
    constructor(props) {
        super(props);

        this.state={
            val :   props.phone



        }
    }

    handleChange = event => {
       // console.log(event.target.value);
        this.setState({val:event.target.value});
        console.log(this.state);



    };

    handlesubmit=event=>{
        event.preventDefault();
      this.props.onUpdate({phone:this.state.val});
    };



    render() {
        const value = this.state.val;
        return (
          <form onSubmit={this.handlesubmit}>
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


}

export default EditPhone;
