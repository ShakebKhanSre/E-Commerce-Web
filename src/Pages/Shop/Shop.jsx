import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Footer from "../../Components/Footer/Footer";
import { enums } from "../../Enums/Enums";
import { getAllProducts } from "../../Redux/Action/Action";
import Item from "../../Components/Item/Item";
import "./Shop.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-spinkit";

const Shop = () => {
  const { innerWidth } = window;

  const [allData, setAllData] = useState([]);
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
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
      <div>
        <p className="Best-Selling-Header">{enums.addNew}</p>
        <div className="Add-Icon" onClick={() => handleOnPressAddNew("Add")}>
          <img
            width={90}
            height={90}
            src={"https://cdn-icons-png.flaticon.com/512/992/992651.png"}
          />
        </div>
      </div>
    );
  };

  const handleClick = (item) => {
    navigate(`/product/${item?.id}`);
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

        <div className="Product-Data" ref={ref}>
          {allData.length != 0 ? (
            allData.map((item, index) => (
              <div>
                <div className="summary" onClick={() => handleClick(item)}>
                  <Item source={item} width={"150px"} height={"150px"} />
                </div>
                <img
                  width={50}
                  height={50}
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
              style={{ width: 70, height: 70, marginLeft: innerWidth / 2 }}
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
