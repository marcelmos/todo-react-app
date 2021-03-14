import React, { Component } from 'react';
import TaskItem from './TaskItem';
import uuid from 'react-uuid';

const todoTasks = [];
todoTasks.push({ name: 'Learn React', isDone: false, taskDate: new Date().toLocaleString(), id: uuid() });
todoTasks.push({ name: 'Wake up', isDone: true, taskDate: new Date().toLocaleString(), id: uuid() });
todoTasks.push({ name: 'Add Firebase connection', isDone: false, taskDate: new Date().toLocaleString(), id: uuid() });
todoTasks.push({ name: 'Animation on add/remove (from left to center when added, from center to right when removed)', isDone: false, taskDate: new Date().toLocaleString(), id: uuid() });
todoTasks.push({ name: 'Task editing', isDone: false, taskDate: new Date().toLocaleString(), id: uuid() });
todoTasks.push({
  name: 'Find a job as a Frontend Developer',
  isDone: false,
  taskDate: new Date().toLocaleString(),
  id: uuid(),
});

class TaskList extends Component {
  constructor(props) {
    super(props);

    let tmpTask = '';

    this.state = { todoTasks, tmpTask };

    this.addTask = this.addTask.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    const dateTask = new Date().toLocaleString();
    const id = uuid();
    let { todoTasks, tmpTask } = this.state;

    if (tmpTask !== '') {
      todoTasks.push({ name: tmpTask, isDone: false, taskDate: dateTask, id: id });
      this.setState({ tmpTask: '' });
    } else {
      console.error('Empty string detected. Action denied.');
    }
  }

  handleTask(event) {
    this.setState({ tmpTask: event.target.value });
  }

  deleteTask(id) {
    // console.log(`to remove: ${id}`);
    this.setState((prevState) => ({
      todoTasks: prevState.todoTasks.filter((task) => {
        // console.log(`name = ${task.name}, id=${task.id}`);
        return task.id !== id;
      }),
    }));
    // console.log(`updated state?? = ${[...this.state.todoTasks]}`);
  }

  render() {
    // console.log('Render called from TaskList.js');
    // console.log(this.state.todoTasks);
    return (
      <div>
        <section className='input-field'>
          <form onSubmit={this.addTask}>
            <input
              type='text'
              className='input-task'
              value={this.state.tmpTask}
              onChange={this.handleTask}
              placeholder='Add new task ToDo...'
            />
            <input type='submit' className='submit' value='Add task' />
          </form>
        </section>

        <ul className='task-list'>
          {this.state.todoTasks.map((task) => (
            <TaskItem task={task} key={task.id} deleteTask={this.deleteTask} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
