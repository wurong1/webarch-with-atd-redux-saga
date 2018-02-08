import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserCard from '../../components/UserCard';
import * as UsersActions from '../../actions/users.action';

import './users.scss';

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(UsersActions.getUsers());
  }

  render() {
    return (
      <div className="users">
        {
          this.props.users.map((user, index) => {
            return <UserCard key={index} user={user} />
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.list
  };
};

export default connect(mapStateToProps)(Users);
