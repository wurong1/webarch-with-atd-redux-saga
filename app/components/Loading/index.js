import React, { Component } from 'react';

import './loading.scss';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="block-loading" >
          <div className="block-loading-icon"></div>
        </div>
      );
    }
    return <div></div>;
  }
}

export default Loading;
