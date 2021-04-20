import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  // 清空所有

  clearAll = () => {
    this.props.clearAllDone();
  };

  // 全选
  handleCheckAll = e => {
    const { checkAll } = this.props;
    checkAll(e.target.checked);
  };

  render() {
    const { todos } = this.props;
    var num = 0;
    todos.map(todoObj => {
      if (todoObj.isDone) {
        num++;
      }
    });
    var sum = todos.length; //总长度
    // 找到已完成的个数
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={num == sum && num !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{num}</span> / 全部{sum}
        </span>
        <button className="btn btn-danger" onClick={this.clearAll}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
