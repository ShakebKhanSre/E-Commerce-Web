import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="Container">
      <img
        src={props?.source?.image}
        width={props.width}
        height={props.height}
      />

      <p>{`Price - ${props?.source?.price}$`}</p>
    </div>
  );
};

export default Item;
