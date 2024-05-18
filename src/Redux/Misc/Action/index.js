import { miscConstant } from "../Constant";

export const AddToCart = (item) => async (dispatch) => {
  try {
    dispatch({
      type: miscConstant.CART_ITEMS,
      payload: item,
    });
  } catch {}
};
