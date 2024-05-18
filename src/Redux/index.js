import { combineReducers } from "redux";
import authenticationReducer from "./Auth/Reducer/AuthReducer";
import miscReducer from "./Misc/Reducer";

const rootReducer = combineReducers({
  authenticationReducers: authenticationReducer,
  miscReducer: miscReducer,
});

export default rootReducer;
