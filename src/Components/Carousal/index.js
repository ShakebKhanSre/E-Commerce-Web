import React, { useEffect, useRef, useState } from "react";
import { carousalImages } from "../../Assets/dummyData";
import "./index.css";

const Carousal = ({ className }) => {
  const carousalRef = useRef(null);
  const [focusElement, setFocusElement] = useState(0);
  useEffect(() => {
    if (carousalImages.length % 2 == 0) {
      setFocusElement(carousalImages.length / 2 - 1);
    } else {
      setFocusElement(carousalImages.length / 2);
    }
  }, []);
  return (
    <div className="Parent-Carousal">
      <div className="Carousal">
        {carousalImages.map((item, index) => (
          <div ref={carousalRef}>
            <img src={item} className={className} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
