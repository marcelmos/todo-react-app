import React, { Component } from 'react';
import './TaskItem.css';
import { GoPencil, GoTrashcan } from 'react-icons/go';

class TaskItem extends Component {
  delete(id) {
    this.props.deleteTask(id);
  }

  constructor(props) {
    super(props);
    const task = this.props.task;
    this.state = { ...task };

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState((state) => ({ isDone: !state.isDone }));
  }

  render() {
    console.log('Render called from TaskItem.js');
    const { isDone, name, id } = this.state;

    return (
      <li className='list-item'>
        <section className={'todo-task' + (isDone ? ' done' : '')}>
          <div className='task-text' onClick={() => this.setState({ isDone: !isDone })}>
            {name}
          </div>
          <button className='btn'>
            <GoPencil />
          </button>
          <button className='btn delete' onClick={this.delete.bind(this, id)}>
            <GoTrashcan />
          </button>
        </section>
      </li>
    );
  }
}

export default TaskItem;
