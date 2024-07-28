import React from "react";
import "./Item.css";

const Item = ({ onHover, onMouseLeave, id, ...props }) => {
  return (
    <div
      className="Container"
      onMouseOver={onHover}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <img
          src={props?.source?.image}
          width={props.width}
          height={props.height}
          id={id}
        />
        <p>{`Price - ${props?.source?.price}$`}</p>
      </div>
    </div>
  );
};

export default Item;
