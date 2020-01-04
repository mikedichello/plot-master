import React, { Component } from 'react'
import axios from 'axios';

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: null
  }
  componentDidMount () {
		if(localStorage.token) {
			this.setState({
				isLoggedIn: true
			})
		} else {
			this.setState({
				isLoggedIn: false
			})
		}
  }
  handleInput = (e) => {
		this.setState({
		  [e.target.name]: e.target.value
		})
	}
  handleSignUp = (e) => {
		e.preventDefault()
		axios.post('/api/users/signup', {
			username: this.state.username,
			password: this.state.password
		  })
			.then(response => {
				localStorage.setItem('token', response.data.token);
				this.setState({
					isLoggedIn: true
				})
			})
			.catch(err => console.log(err))
	  }
  render () {
    return (
      <div>
        {this.state.isLoggedIn ? <div>howdy</div> :
        <h2>Sign Up</h2>}
        <form onSubmit={this.handleSignUp} method="POST">
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' onChange={this.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.handleInput} />
          </div>
          <input value='Submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default SignUpForm