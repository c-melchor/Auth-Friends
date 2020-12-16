import React, { Component } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;

  .button {
    width: 10%;
  }
`;

export default class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: "",
        id: Math.random()
      }
    };
  }

  onChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", this.state.friend)
      .then(res => {
        this.props.setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.onSubmit}>
          <label htmlFor="name">
            New Friend's Name:
            <br />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              value={this.state.friend.name}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label htmlFor="age">
            Age: <br />
            <input
              name="age"
              type="text"
              id="age"
              placeholder="age"
              value={this.state.friend.age}
              onChange={this.onChange}
            />
          </label>{" "}
          <br />
          <label htmlFor="email">
            Email: <br />
            <input
              name="email"
              type="email"
              id="email"
              placeholder="email"
              value={this.state.friend.email}
              onChange={this.onChange}
            />
          </label>{" "}
          <br />
          <button className="button" type="submit">
            Click to Add
          </button>
        </StyledForm>
      </div>
    );
  }
}
