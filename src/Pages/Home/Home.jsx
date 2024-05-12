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

const Shop = () => {
  const { innerWidth } = window;
  const [allData, setAllData] = useState([]);
  const ref = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
                  <Item source={item} />
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
        <HeroBanner />
        {bestSellingProduct()}
        {addNewProduct()}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
