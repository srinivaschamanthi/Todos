import React, { Component } from "react";
import Listitems from "./Listitems";
import _ from "lodash";

export default class Todolist extends Component {
  state = {
    filtered: []
  };

  componentDidMount() {
    this.setState({
      filtered: this.props.toDos
    });
    console.log(this.state.filtered);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.toDos
    });
    console.log(this.state.filtered);
  }
  handleChange = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.toDos;
      newList = currentList.filter(item => {
        const lc = item.task.toLowerCase();
        const filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = this.props.toDos;
    }

    this.setState({
      filtered: newList
    });
  };

  renderItems = () => {
    return _.map(this.state.filtered, (todo, index) => {
      return (
        <Listitems
          key={index}
          task={todo.task}
          isComplete={todo.isComplete}
          deleteTask={this.props.deleteTask}
          handleCheck={this.props.handleCheck}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2" className="sr-only"></label>
            <input
              type="type"
              className="form-control"
              id="inputPassword"
              placeholder="Search..."
              onChange={this.handleChange}
            ></input>
          </div>
        </form>

        <ol>{this.renderItems()}</ol>
      </div>
    );
  }
}
