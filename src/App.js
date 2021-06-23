import React from "react";
import _ from "lodash";
import Header from "./components/Header";
import Create from "./components/Create";
import Todolist from "./components/Todolist";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends React.Component {
  toDos = [
    {
      task: "Playing Cricket",
      isComplete: false
    },
    {
      task: "Playing Basket Ball",
      isComplete: true
    }
  ];

  state = {
    toDos: this.toDos
  };

  createTask = task => {
    this.toDos.push({
      task: task,
      isComplete: false
    });

    this.setState({ toDos: this.toDos });
  };

  deleteTask = tasktodelete => {
    _.remove(this.toDos, todo => todo.task === tasktodelete);

    this.setState({ toDos: this.toDos });
  };

  handleCheck = taskFinished => {
    const foundTodo = _.find(this.toDos, todo => todo.task === taskFinished);
    foundTodo.isComplete = !foundTodo.isComplete;
    this.setState({ toDos: this.toDos });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Todolist
          toDos={this.state.toDos}
          deleteTask={this.deleteTask}
          handleCheck={this.handleCheck}
        />
        <Create createTask={this.createTask} todos={this.state.toDos} />
        
      </div>
    );
  }
}
