import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import SubHeader from '../../components/SubHeader';
import Sidebar from '../../components/Sidebar';
import Loading from '../../components/Loading';

import './app.scss';

const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children } = this.props;

    return (
      <Layout style={{height: '100vh', flexDirection: 'row'}}>
      <Sidebar pathname={this.props.router.getCurrentLocation().pathname} />
      <Layout>
        <Header style={{height: '42px', padding: 0}}>
          <SubHeader />
        </Header>
        <Content>
          { children }
          <Loading />
        </Content>
      </Layout>
    </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {})(App);
