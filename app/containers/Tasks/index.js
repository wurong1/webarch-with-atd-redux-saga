import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline, Icon } from 'antd';

import * as TasksActions from '../../actions/tasks.action';

import './tasks.scss';

class Tasks extends Component {
  componentDidMount() {
    this.props.dispatch(TasksActions.getTasks());
  }

  render() {
    return (
      <div className="tasks">
        <Timeline pending={<p>End</p>}>
          {
            this.props.tasks.map((task, index) => {
              if (index === 3) {
                return (
                  <Timeline.Item key={index} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                    <p>{task.title}</p>
                    <p>{task.assignee}</p>
                    <p>{task.due}</p>
                  </Timeline.Item>
                );
              } else {
                return (
                  <Timeline.Item key={index}  color="green">
                    <p>{task.title}</p>
                    <p>{task.assignee}</p>
                    <p>{task.due}</p>
                  </Timeline.Item>
                );
              }
            })
          }
        </Timeline>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.list
  };
};

export default connect(mapStateToProps)(Tasks);
