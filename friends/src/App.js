import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendsList';
import FriendsForm from './components/friendsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendsList />
        <FriendsForm /> 
      </div>
    );
  }
}

export default App;

