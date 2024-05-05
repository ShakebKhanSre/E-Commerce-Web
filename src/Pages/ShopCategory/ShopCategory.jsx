import React, { useEffect, useState } from "react";
import "./ShopCategory.css";
import { setBodyColor, setButtonColor } from "../../Helper/Helper";
import Item from "../../Components/Item/Item";
import { enums } from "../../Enums/Enums";
import Footer from "../../Components/Footer/Footer";
import { getSpecificCategory } from "../../Redux/Action/Action.jsx";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";

export const ShopCategory = (props) => {
  const [specificCategoryData, setSpecificCategoryData] = useState([]);
  setBodyColor({ color: props.color });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSpecificCategory(
        props?.category,
        (res) => {
          setSpecificCategoryData(res);
        },
        () => {}
      )
    );
  }, [props?.category]);

  return (
    <>
      <div className="Shop-Container">
        <div className="Banner">
          <img src={props.bannerImageUrl} width={"800px"} height={"300px"} />
        </div>
        <div className="Result-Heading">
          <p className="Header">{enums.showResults}</p>
          <button
            onMouseOver={(e) => {
              setButtonColor({ color: props.color });
            }}
            onMouseLeave={() => {
              setButtonColor({ color: "white" });
            }}
          >
            <p>{enums.sort}</p>
            <img
              width={"15px"}
              height={"15px"}
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
            />
          </button>
        </div>
        <div className="Content">
          {specificCategoryData.length != 0 ? (
            specificCategoryData.map((item, index) => (
              <Item source={item} width={"150px"} height={"150px"} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
