import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: 0,
			email: ''	
		};

	}

	handleNameInput = (event) => {
		this.setState({
			name : event.target.value
		});
	}

	handleAgeInput = (event) => {
		this.setState({
			age : event.target.value
		});
	}

	handleEmailInput = (event) => {
		this.setState({
			email : event.target.value
		});
	}

	addFriend = (event) => {
		event.preventDefault();
		this.props.addFriend({
			name: this.state.name,
			age: this.state.age,
			email: this.state.email
		});
		this.setState({
			name: '',
			age: 0,
			email: ''
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.addFriend}>
					
					Name: <input
						type='text'
						onChange={this.handleNameInput}
						placeholder="Please add name here..."
						value={this.state.name}
					/>
					Age: <input
						type='number'
						onChange={this.handleAgeInput}
						placeholder="Please add age here..."
						value={this.state.age}
					/>
					Email: <input
						type='email'
						onChange={this.handleEmailInput}
						placeholder="Please add email here..."
						value={this.state.email}
					/>
				</form>
			</div>
		);
	}
}



export default connect(null, { addFriend })(FriendsForm);
