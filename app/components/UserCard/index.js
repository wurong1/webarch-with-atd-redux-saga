import React, { Component } from 'react';

import './userCard.scss';

class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card" >
        <img src={require(`./assets/${this.props.user.avantar}.png`)} />
        <div className="user-info">
          <p className="username">{ this.props.user.username }</p>
          <p className="tel">TEL: { this.props.user.tel }</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
