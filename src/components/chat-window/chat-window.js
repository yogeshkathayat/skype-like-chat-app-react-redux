import React from "react";
import store from "../../store";
import Header from "./header";
import Chat from "./chat";
import _ from "lodash";
import "./chat.css"

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const messages=state.messages[activeUserId];
    console.log(messages,"messages")
    return (
        <div className="ChatWindow">
        <Header user={activeUser} />
        <Chat messages={_.values(messages)} />
        </div>
    );
};

export default ChatWindow;