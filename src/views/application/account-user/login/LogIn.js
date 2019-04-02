import React  from 'react';
import { Link } from 'react-router-dom';


export class LogIn extends React.Component {
  constructor(props){
    super(props);


    this.state = {
        email: '',
        password: '',
        submitted: false,
        loading: false,
        error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}
