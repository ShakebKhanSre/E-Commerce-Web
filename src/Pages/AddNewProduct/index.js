import React, { useEffect, useState } from "react";
import { enums } from "../../Enums/Enums";
import { useDispatch } from "react-redux";
import "./index.css";
import Modal from "../../Components/Modal";
import {
  addNewProduct,
  getProductDetail,
  updateProduct,
} from "../../Redux/Action/Action.jsx";
import { useNavigate, useParams } from "react-router-dom";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [modalState, setModalState] = useState(false);

  const onModalButtonPress = () => {
    navigate("/");
  };

  const { type, productId } = useParams();

  useEffect(() => {
    if (type == "Edit") {
      dispatch(
        getProductDetail(
          productId,
          (res) => {
            setCategory(res?.category);
            setDescription(res?.description);
            setTitle(res?.title);
            setImage(res?.image);
            setPrice(res?.price);
          },
          () => {}
        )
      );
    }
  }, []);

  const onSubmitDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let params = {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    };

    if (type == "Edit") {
      dispatch(
        updateProduct(
          params,
          productId,
          (res) => {
            if (res?.id) {
              setModalState(true);
            }
          },
          (err) => {
            console.log("err", err);
          }
        )
      );
    } else {
      dispatch(
        addNewProduct(
          params,
          (res) => {
            if (res?.id) {
              setModalState(true);
            }
          },
          (err) => {
            console.log("err", err);
          }
        )
      );
    }
  };

  return (
    <div className="Add-New">
      <form>
        {type == "Edit" ? <p>{enums.ediProduct}</p> : <p>{enums.addNew}</p>}
        <label>
          <input
            value={title}
            placeholder="Add Title"
            onChange={(val) => {
              setTitle(val.target.value);
            }}
            required
          />
        </label>
        <label>
          <input
            value={price}
            placeholder="Add Price"
            onChange={(val) => {
              setPrice(val.target.value);
            }}
            required
          />
        </label>
        <label>
          <input
            value={description}
            placeholder="Add Description"
            onChange={(val) => {
              setDescription(val.target.value);
            }}
            required
          />
        </label>
        <label>
          <input
            value={image}
            placeholder="Add Image Url"
            onChange={(val) => {
              setImage(val.target.value);
            }}
            required
          />
        </label>
        <label>
          <input
            value={category}
            placeholder="Add Category"
            onChange={(val) => {
              setCategory(val.target.value);
            }}
            required
          />
        </label>
        <button onClick={onSubmitDetails}>{enums.submit}</button>
      </form>
      {modalState && (
        <Modal
          headingText={
            type == "Edit" ? enums.productEdited : enums.productAdded
          }
          buttonText={enums.backToHome}
          onButtonPress={onModalButtonPress}
        />
      )}
    </div>
  );
};

export default AddNewProduct;
