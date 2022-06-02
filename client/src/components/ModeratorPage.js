import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class ModeratorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        password: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/articles')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ModeratorLogin');
      })
  };

  onSubmit = e => {
    
    if(this.state.password === "SPEED"){
        this.props.history.push('/moderator-panel');
    }
    e.preventDefault();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="ModeratorLogin">
                <div className="ShowBookList">
        <div class="topnav">
        <a href="/">Home Page</a>
        <a href="/create-book">Add Article</a>
        <a href="#contact">Search Article</a>
        <a href="#about">About</a>
        <div class="topnav-right">
          <a class="active" href="/moderator-login" >Moderator Access</a>
        </div>       
            </div>
            <h2 className="display-4 text-center">Moderator Login</h2>
            <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Enter the Moderator Password'
                    name='password'
                    className='form-control'
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
        </div>
    );
  }
}

export default ModeratorLogin;