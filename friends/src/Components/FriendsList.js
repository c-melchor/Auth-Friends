import React, { Component } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

export default class FriendsList extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getFriends();
  }

  setFriends = friends => {
    this.setState({
      friends: friends
    });
  };

  getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        this.setFriends(res.data);
        // this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        Don't see your friend? Add one using the form below:
        <AddFriend setFriends={this.setFriends} />
        <br />
        {this.state.friends.map(homie => {
          return <Friend homie={homie} id={homie.id} />;
        })}
      </div>
    );
  }
}
