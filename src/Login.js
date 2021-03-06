import React, {Component} from 'react'
import axios from 'axios'
import './Login.css'
class Login extends Component {
	// Data
	state = {
		email: '',
		password: '',
		error: ''
	}
	// Functions

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	login = (e) => {
		e.preventDefault()
		axios.post(`${process.env.REACT_APP_API}/api/login`, this.state).then((res) => {
			if (!res.data.token) {
				this.setState({
					error: res.data
				})
			} else {
				this.setState({
					error: ''
				})
				localStorage.setItem('token', res.data.token)
				this.props.auth()
			}
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Render
	render() {
		return (
			<div id="login">
			<div className="row">
				<div className="col-4 offset-4">
					<div className="card signup">
						<div className="card-body">
							<form onSubmit={(e) => this.login(e)}>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Email..." value={this.state.email} onChange={(e) => this.changeEmail(e)} />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password..." value={this.state.password} onChange={(e) => this.changePassword(e)} />
								</div>
								<div className="error">{this.state.error}</div>
								<button type="submit" className="btn btn-success">Login</button>
								
							</form>
							<a href="/signup">Don't have an account? Register now!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
			
			
		)
	}
}

export default Login
