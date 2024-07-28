import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getProductDetail,
  getAllProducts,
  setNavbarState,
} from "../../Redux/Auth/Action/Action.jsx";
import { useDispatch } from "react-redux";
import Spinner from "react-spinkit";

import "./index.css";
import { enums } from "../../Enums/Enums";
import Item from "../../Components/Item/Item";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log('location',location)

  const [details, setDetails] = useState({});
  const [recommendedData, setRecommendedData] = useState([]);
  const navigate = useNavigate();

  const viewAllPage = () => {
    navigate("/ViewAll");
  };

  useEffect(() => {
    dispatch(setNavbarState(false));
    dispatch(
      getProductDetail(
        id,
        (res) => {
          setDetails(res);
          dispatch(
            getAllProducts((res) => {
              setRecommendedData(res);
            })
          );
        },
        (err) => {
          console.log("err", err);
        }
      )
    );
  }, [id]);

  const handleOnPress = (item) => {
    navigate(`/product/${item?.id}`, { replace: true });
  };

  return (
    <div className="Details-Page">
      {Object.keys(details).length != 0 ? (
        <div className="details">
          <div className="Image-Container">
            <img src={details.image} className="Detail-Image" />
          </div>
          <div className="ProductDetails">
            <p className="title">{details.title}</p>
            <p className="description">{details.description}</p>
            <p className="price">{`Price : ${details.price}`}</p>
            <p className="category">{`Category : ${details.category}`}</p>
            <button>{enums.buyNow}</button>
          </div>
        </div>
      ) : (
        <div className="Spinner">
          <Spinner name="circle" style={{ width: 70, height: 70 }} />
        </div>
      )}
      <div className="Recommended">
        <div className="View-All">
          <p>{enums.recommended}</p>
          <p className="ViewAll-Button" onClick={viewAllPage}>
            {enums.viewAll}
          </p>
        </div>
        <div className="Product-Data">
          {recommendedData.map((item, index) => (
            <div onClick={() => handleOnPress(item)}>
              <Item source={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
