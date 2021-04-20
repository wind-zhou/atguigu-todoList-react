import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  addTodo = e => {
    if (e.keyCode == 13) {
      //按下了回车键
      // 将获取的数据传给父组件App  ；这里就设计到了自向父传值
      if (e.target.value.trim() !== "") {
        //如果不为空
        this.props.transform(e.target.value); //传给App
        e.target.value=''//重新置空
      }
    }
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.addTodo}
        />
      </div>
    );
  }
}
