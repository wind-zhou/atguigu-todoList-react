import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  change = (state, id) => {
    return () => {
      this.setState({
        [id]: state
      });
    };
  };

  componentWillMount() {
    //   在渲染吧前，先预存一个状态的默认值
    this.props.todo.map(todoObj => {
      this.setState({
        [todoObj.id]: false
      });
    });
  }

  componentWillReceiveProps(props) {
    //   在渲染吧前，先预存一个状态的默认值
    props.todo.map(todoObj => {
      this.setState({
        [todoObj.id]: false
      });
    });
  }

  //  点击桥勾选
  alterState = id => {
    return e => {
      this.props.changeCheck(id, e.target.checked);
    };
  };

  //   删除操作
  delTodo = id => {
    const { delTodo } = this.props;
    delTodo(id);
  };

  render() {
    // 解构赋值，拿到props传过来的数据
    const { todo } = this.props;
    return (
      <div className="listWrapper">
        {todo.map(todoObj => {
          return (
            <li
              style={{
                backgroundColor: this.state[todoObj.id] ? "#eee" : "white"
              }}
              key={todoObj.id}
              onMouseEnter={this.change(true, todoObj.id)}
              onMouseLeave={this.change(false, todoObj.id)}
            >
              <label>
                <input
                  type="checkbox"
                  checked={todoObj.isDone}
                  onChange={this.alterState(todoObj.id)}
                />
                <span>{todoObj.name}</span>
              </label>
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.delTodo(todoObj.id);
                }}
                style={{
                  display: this.state[todoObj.id] ? "inline-block" : "none"
                }}
              >
                删除
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}
