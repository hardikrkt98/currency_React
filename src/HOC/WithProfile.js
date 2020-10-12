import React from "react";


function withProfile(BaseComponent)
{
  return class HOCComponent extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              profile: {}
          }
      }


      componentDidMount() {
       const profiles = {
               name:'Hardik',
               email:'sunsee@as.com',
               phone:'9787897979'

       };
       this.setState({profiles});


      }

      render() {
          return <BaseComponent profile ={this.state.profile} {...this.props}/>
      };

  }
}
