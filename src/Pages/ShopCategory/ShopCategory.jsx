import React, { useEffect, useState } from "react";
import "./ShopCategory.css";
import {
  setBodyColor,
  setButtonColor,
  setVideoOptionView,
} from "../../Helper/Helper";
import Item from "../../Components/Item/Item";
import { enums } from "../../Enums/Enums";
import Footer from "../../Components/Footer/Footer";
import {
  getSpecificCategory,
  setNavbarState,
} from "../../Redux/Auth/Action/Action.jsx";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { videoData } from "./VideoPlayerData";
import ReactPlayer from "react-player";

export const ShopCategory = (props) => {
  const [specificCategoryData, setSpecificCategoryData] = useState([]);
  setBodyColor({ color: props.color });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedVideoData, setSelectedVideoData] = useState({});

  const onItemClick = (id) => {
    navigate(`/product/${id}`, {
      replace: true,
    });
  };

  useEffect(() => {
    if (props?.category == "Video-Section") {
      setNavbarState(true);
      setSelectedVideoData(videoData[0]);
    }
  }, [props?.category]);

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
        {props.category != "Video-Section" ? (
          <>
            <div className="Banner">
              <img
                src={props.bannerImageUrl}
                width={"800px"}
                height={"300px"}
              />
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
          </>
        ) : (
          <div className="Video-Container" key="uniqueKey">
            <div>
              <ReactPlayer
                controls={true}
                url={selectedVideoData.sources}
                playing={true}
                className="Video-Player"
                width="93%"
                height="84%"
              />
              <div className="Whole-Text">
                <p className="Long-Text">Currently Watching :</p>
                <p className="Selected-Video-Description">
                  {selectedVideoData?.title}
                </p>
              </div>
            </div>

            <div className="Video-List">
              {videoData.map((item, index) => (
                <div
                  className="Video-data"
                  onClick={() => {
                    console.log("item", item);
                    setSelectedVideoData(item);
                  }}
                  style={{
                    backgroundColor:
                      selectedVideoData == item ? "rgb(249,217,76)" : "bisque",
                  }}
                  key={index}
                >
                  <p className="Item-data">{item?.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
