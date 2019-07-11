import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Jumbotron from './Jumbotron'
import Logout from './Logout'
import Home from './Home'

class App extends Component {
	// Data
	state = {
		channel: ''
	}
	// Functions
	getMessages = (id) => {
		this.setState({
			channel: id
		})
	}
	// Render
	render() {
		return (
			<div id="megawrap">
			<nav className="navbar navbar-dark bg-primary twitter-nav">
			<Home />
			<Logout />
			</nav>
				
				<Jumbotron />
				<div id="wrap" className="row">
					<Sidebar getMessages={this.getMessages} />
					<Content channel={this.state.channel} />
			</div>
		</div>
		)
	}
}

export default App
