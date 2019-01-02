import React from "react";
import "./main.css";
import Empty from "../empty/empty";
import ChatWindow from "../chat-window/chat-window"; 

const Main = ({ user, activeUserId }) => {
    console.log(activeUserId, typeof activeUserId)

    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />;
        }
        else {
            return <ChatWindow activeUserId={activeUserId} />;
        }
    }
    return <main className="Main">{renderMainContent()}</main>;
};

export default Main;