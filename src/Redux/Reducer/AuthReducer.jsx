import { authConstants } from "../Constants/Constants";

const initialState = {
  token: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default:
      return [];
  }
};

export default authenticationReducer;
