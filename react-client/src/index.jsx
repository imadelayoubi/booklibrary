import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import axios from "axios";
import Header from "./components/Header.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "",
      description: "",
      imageUrl: "",
    };
  }

  componentDidMount() {
    $.ajax({
      url: "/items",
      success: (data) => {
        this.setState({
          items: data,
        });
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  }

  handlechange(e) {
    this.setState({  [e.target.name]: e.target.value });
    console.log(this.state);
  }
  create() {
    axios.post("/add", this.state).then((data) => {
      this.componentDidMount();
    });
  }
  render() {
    return (
      <div>
        <h1>Add your own book</h1>
        <input
          type="text"
          name="name"
          onChange={this.handlechange.bind(this)}
          placeholder= "Tilte"
          />
        <input type="text" name="description"  onChange={this.handlechange.bind(this)}
        placeholder="desrciption"
        />
        <input
          type="text"
          name="imageUrl"
          onChange={this.handlechange.bind(this)}
          placeholder="imageUrl"
          />
        <button onClick={this.create.bind(this)}>Add Book</button>
        <List items={this.state.items} />
          </div>
           
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));















