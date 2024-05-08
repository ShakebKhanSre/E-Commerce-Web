import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Redux/Action/Action.jsx";
import { useDispatch } from "react-redux";
import "./index.css";
import Item from "../../Components/Item/Item.jsx";
import { enums } from "../../Enums/Enums.jsx";
import Spinner from "react-spinkit";
import { useNavigate } from "react-router-dom";

const ViewAll = () => {
  const [viewAllData, setViewAllData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getAllProducts((res) => {
        setViewAllData(res);
      })
    );
  }, []);

  const itemClick = (item) => {
    navigate(`/product/${item?.id}`);
  };

  return (
    <div className="View-Container">
      <h2>{enums.allProducts}</h2>
      <div className="View">
        {viewAllData.length != 0 ? (
          viewAllData.map((item, index) => (
            <div onClick={() => itemClick(item)}>
              <Item source={item} width={"250px"} height={"250px"} o />
            </div>
          ))
        ) : (
          <Spinner name="circle" style={{ width: 70, height: 70 }} />
        )}
      </div>
    </div>
  );
};

export default ViewAll;
