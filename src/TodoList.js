import React from 'react';
import Header from './layout/Header.js';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';

import './TodoList.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// main function - will the be display function of todolist app
class TodoList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 1, name: "Code", isComplete: false},
        {id: 2, name: "Bake Lemon Blueberry Poundcake", isComplete: false},
        {id: 3, name: "Bake Sourdough Bread", isComplete: false},
        {id: 4, name: "Study Hebrew", isComplete: false},
      ]
    }
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    });
  }

  removeTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="todolist-container container">
        <Header />

        <Todos todos={this.state.todos} markComplete={this.markComplete} removeTodo={this.removeTodo} />

        <AddTodo />
      </div>
      );
  }
}

export default TodoList;