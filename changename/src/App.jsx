import React, { Component } from 'react';

class UserProfile extends Component {
  state = { name: 'John' };

  changeName = () => {
    this.setState({ name: 'Jane' });
  };

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default UserProfile;