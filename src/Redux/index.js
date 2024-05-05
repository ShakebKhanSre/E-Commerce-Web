import authenticationReducer from "./Reducer/AuthReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authenticationReducer,
});

export default rootReducer;
