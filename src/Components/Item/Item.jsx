import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="Container">
      <div>
        <img
          src={props?.source?.image}
          width={props.width}
          height={props.height}
        />
        <p>{`Price - ${props?.source?.price}$`}</p>
      </div>
    </div>
  );
};

export default Item;
