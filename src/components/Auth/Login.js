import React, { Component } from 'react'
import axios from 'axios';
import Modal from '../styles/Modal';
import Input from '../styles/LoginInput';

const API = process.env.API_URL || `http://localhost:2300`;

export default class Login extends Component {
  
  state = {
     email: '',
     password: ''
  }
  handleInput = (event) => {
     event.preventDefault();
     const target = event.target;
     this.setState({
        [target.name] : target.value
     })
  }
  handleSubmit = (event) => {
     event.preventDefault();
     const credentials = this.state;
     if(!credentials.email) alert('Pleaser enter a valid email');
     if(!credentials.password) alert('Pleaser enter a valid password');
     const endpoint = `${API}/api/login`;
     axios.post(endpoint, credentials)
          .then(response => {
             console.log(response);
             localStorage.setItem('jwt', response.data.token);
             console.log(`props from sign-in`,this.props);
             this.props.history.push('/');
          })
          .catch(err => {
             console.log(`errorMessage: `, err);
          });
      
    this.setState({
      email: '',
      password:''
      });    
  } 
 
  render() {
    return (
      <div>
      
       <Modal>
       <h1 className='h1'>Log-in form:</h1>
        <form onSubmit={this.handleSubmit}>
        <div>         
            <p className='para'>Your Email:</p>
            <Input type='email' name='email'
                   value={this.state.email}
                   onChange={this.handleInput}
                   placeholder='Email' required></Input>
         </div>
         <div>
            <p className='para'>Password:</p> 
            <Input type='text' name='password'
                   value={this.state.password}
                   onChange={this.handleInput}
                   placeholder='Password' required></Input>
         </div>
         <div>
           <button type='submit' className='register'>Sign In</button>
         </div>
       </form>
       </Modal>
      </div>
    )
  }
}