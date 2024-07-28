import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Footer from "../../Components/Footer/Footer";
import { enums } from "../../Enums/Enums";
import {
  getAllProducts,
  setNavbarState,
} from "../../Redux/Auth/Action/Action.jsx";
import Item from "../../Components/Item/Item";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-spinkit";
import { AddToCart } from "../../Redux/Misc/Action";
import { debounce, setNavbarBackground } from "../../Helper/Helper";
import Carousal from "../../Components/Carousal";

const Shop = () => {
  const { cartItems } = useSelector((state) => state?.miscReducer);
  const { innerWidth } = window;

  const [allData, setAllData] = useState([]);

  const onHandleScroll = () => {
    if (window.scrollY > 10) {
      setNavbarBackground({ color: "#dcdcdc" });
    } else {
      setNavbarBackground({ color: "white" });
    }
  };

  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickAddToCart = (item) => {
    dispatch(AddToCart(item));
  };

  useEffect(() => {
    debounce();
    document.body.onscroll = debounce(onHandleScroll, 200, true);
  }, []);

  useEffect(() => {
    dispatch(setNavbarState(true));
    dispatch(
      getAllProducts((res) => {
        setAllData(res);
      })
    );
  }, []);

  const handleOnPressAddNew = (type, productId = null) => {
    if (productId) navigate(`/AddNewProduct/${type}/${productId}`);
    else navigate(`/AddNewProduct/${type}`);
  };

  const addNewProduct = () => {
    return (
      <>
        <p className="Best-Selling-Header">{enums.addNew}</p>
        <div className="Add-Icon" onClick={() => handleOnPressAddNew("Add")}>
          <img
            width={50}
            height={50}
            src={"https://cdn-icons-png.flaticon.com/512/992/992651.png"}
          />
        </div>
      </>
    );
  };

  const handleClick = (item) => {
    navigate(`/product/${item?.id}`, {
      state: "Pass Data through route",
    });
  };

  const handleScroll = (type) => {
    if (type == "forward") {
      return window.scrollTo({
        left: (ref.current.scrollLeft += 200),
        behavior: "smooth",
      });
    } else {
      return window.scrollTo({
        left: (ref.current.scrollLeft -= 200),
        behavior: "smooth",
      });
    }
  };

  const onHoverImage = (id) => {
    const element = document.getElementById(id);
    element.style.width = "200px";
    element.style.transition = "width 1s, height 1s";
  };

  const onMouseLeave = (id) => {
    const element = document.getElementById(id);
    element.style.width = "150px";
  };

  const bestSellingProduct = () => {
    return (
      <div className="Best-Selling">
        <div className="Header">
          <div>
            <p className="Best-Selling-Header">{enums.allProducts}</p>
          </div>
          <div className="Scroll-Image">
            <img
              src="https://static.thenounproject.com/png/3809812-200.png"
              width={40}
              height={40}
              onClick={() => handleScroll("forward")}
            />
            <img
              className="Scroll-Icon"
              src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
              width={35}
              height={35}
              onClick={() => handleScroll("backward")}
            />
          </div>
        </div>

        <div className="Product" ref={ref}>
          {allData.length != 0 ? (
            allData.map((item, index) => (
              <div className="dddd">
                <div className="summary" onClick={() => handleClick(item)}>
                  <Item
                    source={item}
                    onHover={() => onHoverImage(`dummyImage${index}`)}
                    id={`dummyImage${index}`}
                    onMouseLeave={() => onMouseLeave(`dummyImage${index}`)}
                  />
                </div>
                <div
                  className="Add-Cart"
                  onClick={() => onClickAddToCart(item)}
                >
                  Add To Cart
                </div>
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/4226/4226577.png"
                  }
                  className="Edit-Icon"
                  onClick={() => handleOnPressAddNew("Edit", item?.id)}
                />
              </div>
            ))
          ) : (
            <Spinner
              name="circle"
              style={{ width: 50, height: 50, marginLeft: innerWidth / 2 }}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <Carousal className="Carousal-Aspect" />
        <HeroBanner className="Banner-Aspect" />
        {bestSellingProduct()}
        {addNewProduct()}
      </div>
      <Footer className="Footer-Options" />
    </>
  );
};

export default Shop;
