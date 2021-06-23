import React, { Component } from "react";

export default class Listitems extends Component {
  render() {
    return (
      <div>
        <ul className="list-group" id="">
          <li
            className="list-group-item d-flex justify-content-between"
            style={{
              backgroundColor: this.props.isComplete ? "#25CCF7" : "",
              color: this.props.isComplete ? "white" : ""
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                onChange={this.props.handleCheck.bind(this, this.props.task)}
                defaultChecked={this.props.isComplete}
              ></input>
            </div>
            <div className="d-flex flex-column">{this.props.task}</div>
            <div>
              <span className="px-5"></span>
              <button
                type="button"
                onClick={this.props.deleteTask.bind(this, this.props.task)}
                className="btn btn-outline-danger btn-sm"
              >
                x
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
