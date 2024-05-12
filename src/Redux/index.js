import { combineReducers } from "redux";
import authenticationReducer from "./Auth/Reducer/AuthReducer";

const rootReducer = combineReducers({
  authenticationReducer,
});

export default rootReducer;
