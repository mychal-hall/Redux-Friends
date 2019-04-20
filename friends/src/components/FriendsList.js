import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { deleteFriend, updateOneFriend, showUpdate } from "../actions";
import UpdateFriendForm from "./UpdateFriendForm";
import SelectedFriend from "./SelectedFriend";
class FriendsList extends Component {
  handleDelete = () => {
    const { id } = this.props.friendSelected;
    this.props.deleteFriend(id);
  };

  handleShow = friend => {
    this.props.updateOneFriend(friend);
  };

  showUpdate = () => {
    this.props.showUpdate();
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map(friend => {
            return (
              <li onClick={() => this.handleShow(friend)} key={friend.id}>
                {friend.name}
              </li>
            );
          })}
        </ul>
        {Object.keys(this.props.friendSelected).length > 0 ? (
          <SelectedFriend
            handleShow={this.handleShow}
            showUpdate={this.showUpdate}
            handleDelete={this.handleDelete}
            selected={this.props.friendSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdateFriendForm friend={this.props.friendSelected} />
        ) : null}
        {this.props.deletingFriend ? <img src={logo} alt="logo" /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingFriend: state.friendsReducer.deletingFriend,
    error: state.friendsReducer.error,
    showUpdate: state.friendReducer.showUpdate,
    friendSelected: state.friendReducer.friendSelected
  };
};

export default connect(
  mapStateToProps,
  {
    deleteFriend,
    updateOneFriend,
    showUpdate
  }
)(FriendsList);
