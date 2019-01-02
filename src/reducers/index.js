import { combineReducers } from "redux";

import user from "./usersReducer";
import contacts from "./contactsReducer";

export default combineReducers({
    user,
    contacts,
  });