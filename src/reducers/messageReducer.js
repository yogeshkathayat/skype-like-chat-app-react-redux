import {getMessages} from "../static-data";

export default (state=getMessages(), action) => {
    return state;
};