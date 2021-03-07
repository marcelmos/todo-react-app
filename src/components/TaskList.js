import React, {Component} from 'react';
import TaskItem from './TaskItem';

const todoTasks = [];
todoTasks.push({name: 'Learn React', isDone: false, taskDate: new Date().toLocaleString()});
todoTasks.push({name: 'Wake up', isDone: true, taskDate: new Date().toLocaleString()});
todoTasks.push({name: 'Find a job as a Frontend Developer', isDone: false, taskDate: new Date().toLocaleString()});
todoTasks.push({name: 'Repair task remove system in app. (Remove last task indepedently for pressed task)', isDone: false, taskDate: new Date().toLocaleString()});


class TaskList extends Component {
    constructor(props) {
      super(props);

      let tmpTask = '';

      this.state = {todoTasks, tmpTask};

      this.addTask = this.addTask.bind(this);
      this.handleTask = this.handleTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(event){
      event.preventDefault();
      const dateTask = new Date().toLocaleString()
      let {todoTasks, tmpTask} = this.state;

      if(tmpTask !== ''){
        todoTasks.push({name: tmpTask, isDone: false, taskDate: dateTask});
        this.setState({tmpTask: ''});
      }else{
        console.error('Empty string detected. Action denied.');
      }

    }

    handleTask(event){
      this.setState({tmpTask: event.target.value});
    }

    deleteTask(taskIndex){
      console.log(todoTasks);
      todoTasks.splice(taskIndex, 1);
      this.setState({todoTasks: todoTasks});
    }

    render() {
      return(
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
            {this.state.todoTasks.map((task, index) => (
              console.log(todoTasks),
              console.log(index),
              <TaskItem task={task} key={index} index={index} deleteTask={this.deleteTask}/>
            ))}
          </ul>
        </div>
      );
    }
  }

  export default TaskList;