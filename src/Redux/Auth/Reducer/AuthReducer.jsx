import { authConstants } from "../Constants/Constants";

const initialState = {
  showNavbar: false,
  token: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.NAVBAR_STATE: {
      return { ...state, showNavbar: action.payload };
    }
    case authConstants.TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authenticationReducer;
