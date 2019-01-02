import React from "react";
import "./chat.css";

function Chat({ messages }) {
    return <div className="Chats">
    {messages.map(message =>{
        const { text, is_user_msg } = message;
       return <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    })}</div>;


}

export default Chat;