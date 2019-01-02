import { combineReducers } from "redux";

import user from "./usersReducer";
import contacts from "./contactsReducer";
import activeUserId from "./activeUserIdReducer";
import messages from "./messageReducer";

export default combineReducers({
    user,
    contacts,
    messages,
    activeUserId
});