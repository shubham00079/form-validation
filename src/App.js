import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    message: "",
    style: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validateEmail = (email) => {
      var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      return re.test(email);
    };
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ message: "All fields are necessary", style: "danger" });
    } else {
      if (validateEmail(this.state.email)) {
        this.setState({ message: "All Good", style: "success" });
        alert(`Email: ${this.state.email}
Password: ${this.state.password}`);
      } else {
        this.setState({
          message: "Please enter a valid email id",
          style: "danger",
        });
      }
    }
  };

  render() {
    return (
      <>
        <br />
        <form style={{ paddingLeft: "40%" }}></form>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            style={{ width: "40%" }}
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            style={{ width: "40%" }}
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          ></input>
        </div>
        {this.state.message !== "" && (
          <div className={`text text-${this.state.style}`}>
            {this.state.message}
          </div>
        )}
        <br />
        <button
          type="submit"
          className="btn btn-success"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </>
    );
  }
}

export default App;
