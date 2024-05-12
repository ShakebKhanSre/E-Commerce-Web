import React, { useEffect, useState } from "react";
import "./ShopCategory.css";
import { setBodyColor, setButtonColor } from "../../Helper/Helper";
import Item from "../../Components/Item/Item";
import { enums } from "../../Enums/Enums";
import Footer from "../../Components/Footer/Footer";
import { getSpecificCategory } from "../../Redux/Auth/Action/Action.jsx";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

export const ShopCategory = (props) => {
  const [specificCategoryData, setSpecificCategoryData] = useState([]);
  setBodyColor({ color: props.color });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onItemClick = (id) => {
    navigate(`/product/${id}`, {
      replace: true,
    });
  };

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

          {/* <button
            className="Sort-Button"
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
          </button> */}
        </div>
        <div className="Content">
          {specificCategoryData.length != 0 ? (
            specificCategoryData.map((item, index) => (
              <div onClick={() => onItemClick(item?.id)}>
                <Item source={item} />
              </div>
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
