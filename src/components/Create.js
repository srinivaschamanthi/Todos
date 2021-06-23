import React, { Component } from "react";
import _ from "lodash";

export default class Create extends Component {
  state = {
    error: null
  };

  renderError = () => {
    if (!this.state.error) {
      return null;
    }

    return <div style={{ color: "red" }}>{this.state.error}</div>;
  };

  handleSubmit = event => {
    event.preventDefault();
    const createInput = this.refs.createinput;
    let task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }
    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createinput.value = "";
  };

  validateInput = task => {
    if (!task) {
      return "Please enter a task.";
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return "Task already exists.";
    } else {
      return null;
    }
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
              placeholder="Type something"
              ref="createinput"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Add task
          </button>
        </form>

        {this.renderError()}
      </div>
    );
  }
}
