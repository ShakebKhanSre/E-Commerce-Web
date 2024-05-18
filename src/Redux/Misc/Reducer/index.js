import { miscConstant } from "../Constant";

const miscInitialstate = {
  cartItems: [],
};

const miscReducer = (state = miscInitialstate, action) => {
  switch (action.type) {
    case miscConstant.CART_ITEMS: {
      return { ...state, cartItems: action.payload };
    }
    default:
      return state;
  }
};

export default miscReducer;
