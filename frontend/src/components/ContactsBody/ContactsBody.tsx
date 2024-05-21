import React, { Component } from "react";
import "./ContactsBody.css";
import chat from "../../assets/DataJs/chat";

interface Props {
  id: number;
}

interface State {
  isGrid: boolean;
}

class ContactsBody extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isGrid: true,
    };
  }

  handleGridToggle = () => {
    this.setState({ isGrid: true });
  };

  handleListToggle = () => {
    this.setState({ isGrid: false });
  };

  render() {
    return (
      <div className="chat-panel">
        <div className="chat-sidebar">
          <h2>Chat them</h2>
          <div className="grid-changer">
            <div className="grid-changer-icons">
              <span
                className={`grid-changer-icon ${
                  this.state.isGrid ? "active" : ""
                }`}
                onClick={this.handleGridToggle}
              ></span>
              <span
                className={`grid-changer-icon ${
                  !this.state.isGrid ? "active" : ""
                }`}
                onClick={this.handleListToggle}
              ></span>
            </div>
            <div className="grid-chat-container">
              {this.state.isGrid ? (
                chat.map((user, index) => (
                  <div className="chat-users-items" key={index}>
                    <div className="chat-users-item-div">
                      <div className="chat-users-item">
                        <img
                          className="chat-users-img"
                          src={user.logo}
                          alt="logo"
                        ></img>
                      </div>
                      <div className="chat-users-item">{user.nickname}</div>
                    </div>
                  </div>
                ))
              ) : (
                <ul className="list-chat-container">
                  {chat.map((user, index) => (
                    <li className="list-chat-container-item" key={index}>
                      <img
                        className="chat-users-img"
                        src={user.logo}
                        alt="logo"
                      ></img>
                      <span className="chat-container-text">
                        {user.nickname}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactsBody;
