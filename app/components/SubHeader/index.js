import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Menu, Dropdown } from 'antd';

import './subHeader.scss';

class SubHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a>退出</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <header className="header">
        <div className="account">
          <Icon type="user" />
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              <span className="username">Gaoyuan</span><Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(SubHeader);
