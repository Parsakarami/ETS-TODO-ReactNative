/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';

//todo counter
let todoIndex = 0

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  // input Method
  inputChange(inputValue) {
    console.log('inputValue: ', inputValue);
    this.setState({inputValue});
  }

  //submit Method
  submitTodo() {
    //check for whitespaces
    if (this.state.inputValue.match(/^\s*$/)){
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo]
    this.setState({todos, inputValue:''}, () => {
      // console.log('State:', this.state)
    });
  }

  //deleteTodo method
  deleteTodo(todoIndex) {
    let {todos} = this.state;
    todos = this.state.todos.filter((todo) => {
      return todo.todoIndex !== todoIndex;
    });
    this.setState({todos});
  }

  //toggleComplete method
  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({todos});
  }

  render() {
    // inputValue variable
    const {inputValue, todos} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
