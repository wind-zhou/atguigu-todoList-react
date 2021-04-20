import React, { Component } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  // 点击添加
  addItem = data => {
    let newTodoObj = [
      {
        id: nanoid(),
        isDone: false,
        name: data
      },
      ...this.state.todos
    ];

    this.setState({
      todos: newTodoObj
    });
  };

  //   点击check改变state

  changeCheck = (id, checkState) => {
    // 根据id改变对象id的isDone

    let targetObj = this.state.todos.filter(todoObj => {
      if (todoObj.id !== id) {
        return todoObj;
      } else {
        todoObj.isDone = checkState;
        return todoObj;
      }
    });

    this.setState({
      todos: targetObj
    });
  };

  //   删除
  delTodo = id => {
    const { todos } = this.state;
    let newTodes = todos.filter(todoObj => {
      return todoObj.id !== id;
    });

    this.setState({
      todos: newTodes
    });
  };

  //   全选/全取消

  checkAll = flag => {
    const { todos } = this.state;
    let newTodos = todos.map(todoObj => {
      todoObj.isDone = flag;
      return todoObj;
    });

    this.setState({
      todos: newTodos
    });
  };

  //   删除已经完成的
  clearAllDone = () => {
    const { todos } = this.state;
    let newTodos = todos.filter(todoObj => {
      return todoObj.isDone !== true;
    });
    this.setState({
      todos: newTodos
    });
  };

  state = {
    todos: []
  };

  render() {
    const { todos } = this.state; //结构赋值
    return (
      <div className="wrapper">
        <Header transform={this.addItem} />
        <List
          todo={todos}
          changeCheck={this.changeCheck}
          delTodo={this.delTodo}
        />
        <Footer todos={todos} checkAll={this.checkAll}  clearAllDone={this.clearAllDone} />
      </div>
    );
  }
}
