import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Footer from "../../Components/Footer/Footer";
import { enums } from "../../Enums/Enums";
import { getAllProducts } from "../../Redux/Action/Action";
import Item from "../../Components/Item/Item";
import "./Shop.css";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Shop = () => {
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
              <div className="summary" onClick={() => handleClick(item)}>
                <Item source={item} width={"150px"} height={"150px"} />
              </div>
            ))
          ) : (
            <Loader />
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
      </div>
      <Footer />
    </>
  );
};

export default Shop;
