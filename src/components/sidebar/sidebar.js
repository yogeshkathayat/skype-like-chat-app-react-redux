import React from "react";
import User from "../user/user"; 
import "./sidebar.css";

const Sidebar = ({ contacts }) => {
  return <aside className="Sidebar"><p>Contacts</p>
     {contacts.map(contact => <User user={contact} key={contact.user_id} />)}</aside>;
};

export default Sidebar;