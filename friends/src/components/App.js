import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";
import { getFriends } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Mike's 'Friends'</h1>
          <FriendForm />
        </header>
        {this.props.error ? <h3>Error Fetching Friends</h3> : null}
        <div>
          {this.props.gettingFriends ? (
            <img src={logo} alt="logo" />
          ) : (
            <FriendsList friends={this.props.friends} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(App);
