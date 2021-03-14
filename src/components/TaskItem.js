import React, { Component } from 'react';
import './TaskItem.css';
import { GoPencil, GoCheck, GoTrashcan } from 'react-icons/go';

class TaskItem extends Component {
  delete(id) {
    this.props.deleteTask(id);
  }

  constructor(props) {
    super(props);
    const task = this.props.task;
    this.state = { ...task, isEditing: false };

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState((state) => ({ isDone: !state.isDone }));
  }

  render() {
    const { isDone, name, id } = this.state;
    let display;

    if(this.state.isEditing && !isDone){
      display = <input type="text" className="input-edit" value={name} />;
    }else{
      display = name;
      if(this.state.isEditing) this.setState({isEditing: false});
    }

    return (
      <li className='list-item'>
        <section className={'todo-task' + (isDone ? ' done' : '') + (this.state.isEditing ? ' editing-task' : '')}>
          <div className='task-text' onClick={() => this.setState({ isDone: !isDone })}>
            {display}
          </div>
          <button className='btn' style={isDone ? {display: 'none'} : {display: 'block'}} onClick={() => this.setState({isEditing: !this.state.isEditing})}>
            {this.state.isEditing ? <GoCheck /> : <GoPencil />}
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
