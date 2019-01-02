import { combineReducers } from "redux";

import user from "./usersReducer";
import contacts from "./contactsReducer";
import activeUserId from "./activeUserIdReducer";

export default combineReducers({
    user,
    contacts,
    activeUserId
});