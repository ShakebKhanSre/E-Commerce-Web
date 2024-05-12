import {
  sendPostRequest,
  sendGetRequest,
  putRequestAuthenticated,
} from "../../../ApiManager";
import { authConstants } from "../Constants/Constants";

export const getAllProducts =
  (callback = () => {}, error = () => {}) =>
  async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      callback(data);
    } catch {}
  };

export const getSpecificCategory =
  (params, callback = () => {}, error = () => {}) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${params}`
      );
      const data = await response.json();
      callback(data);
    } catch {}
  };

export const login =
  (params, callback = () => {}, error = () => {}) =>
  async (dispatch) => {
    try {
      const response = await sendPostRequest(
        "https://fakestoreapi.com/auth/login",
        params
      );
      dispatch({
        type: authConstants.TOKEN,
        payload: response?.token,
      });
      callback(response);
    } catch {}
  };

export const getProductDetail =
  (params, callback = () => {}, error = () => {}) =>
  async (dispatch) => {
    try {
      const response = await sendGetRequest(
        `https://fakestoreapi.com/products/${params}`
      );
      callback(response);
    } catch {}
  };

export const signUp =
  (params, callback = () => {}, error = () => {}) =>
  async (dispatch) => {
    try {
      const response = await sendPostRequest(
        "https://fakestoreapi.com/users",
        params
      );

      callback(response);
    } catch {}
  };

export const addNewProduct =
  (params, callback = () => {}, error = () => {}) =>
  async (dispatch) => {
    try {
      const response = await sendPostRequest(
        "https://fakestoreapi.com/products",
        params
      );

      callback(response);
    } catch {}
  };

export const updateProduct =
  (params, productId, callback = () => {}, error = () => {}) =>
  async (dispatch) => {
    try {
      const response = await putRequestAuthenticated(
        `https://fakestoreapi.com/products/${productId}`,
        params
      );

      callback(response);
    } catch {}
  };

export const setNavbarState = (state) => async (dispatch) => {
  try {
    dispatch({
      type: authConstants.NAVBAR_STATE,
      payload: state,
    });
  } catch {}
};
