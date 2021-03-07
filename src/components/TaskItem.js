import React, {Component} from 'react';
import './TaskItem.css';
import { GoPencil, GoTrashcan } from "react-icons/go";

class TaskItem extends Component{
    constructor(props){
        super(props);
        const task = this.props.task;
        this.state = {...task};

        this.changeState = this.changeState.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    changeState(){
        this.setState(state => ({isDone: !state.isDone}));
    }

    removeTask(){
      const index = parseInt(this.props.index);
      this.props.deleteTask(index);
    }

    render(){
        const { isDone, taskDate, name } = this.state;

      return(
        <li className='list-item'>
          <section className={'todo-task' + (isDone ? ' done' : '')} key={taskDate}>
            <div className='task-text' onClick={() => this.setState({isDone: !isDone})}>{name}</div>
            <button className='btn'><GoPencil /></button>
            <button
              className='btn delete'
              onClick={this.removeTask}
            >
              <GoTrashcan />
            </button>
          </section>
        </li>
      );
    }
  }

  export default TaskItem;