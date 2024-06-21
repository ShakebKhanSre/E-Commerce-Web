import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarState } from "../../Redux/Auth/Action/Action";

import "./index.css";

const CartDetails = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state?.miscReducer);

  useEffect(() => {
    dispatch(setNavbarState(false));
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <p>{"Under Development !!!! Stay Tuned"}</p>
    </div>
  );
};

export default CartDetails;
