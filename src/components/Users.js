import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    const users = this.props.users.map(user => {
      return <li key={user.username}>Name: {user.username}, Hometown: {user.hometown}</li>
    });
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.map(user => {

            return <li> {user.username} </li>
          })}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
