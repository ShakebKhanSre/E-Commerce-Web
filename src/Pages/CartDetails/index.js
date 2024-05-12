import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavbarState } from "../../Redux/Auth/Action/Action";
import "./index.css";

const CartDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavbarState(false));
  }, []);
  return <div>{"CartDetails"}</div>;
};

export default CartDetails;
