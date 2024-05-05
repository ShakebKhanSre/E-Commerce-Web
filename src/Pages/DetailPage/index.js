import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail, getAllProducts } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";

import "./index.css";
import { enums } from "../../Enums/Enums";
import Item from "../../Components/Item/Item";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [recommendedData, setRecommendedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
    navigate(`product/${item?.id}`);
  };

  return (
    <div className="Details-Page">
      <div className="details">
        <div>
          <img src={details.image} width={"400px"} height={"500px"} />
        </div>
        <div className="ProductDetails">
          <p className="title">{details.title}</p>
          <p className="description">{details.description}</p>
          <p className="price">{`Price : ${details.price}`}</p>
          <p className="category">{`Category : ${details.category}`}</p>
          <button>{enums.buyNow}</button>
        </div>
      </div>
      <div className="Recommended">
        <p>{enums.recommended}</p>
        <div className="Product-Data">
          {recommendedData.map((item, index) => (
            <div onClick={() => handleOnPress(item)}>
              <Item source={item} width={"150px"} height={"150px"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
