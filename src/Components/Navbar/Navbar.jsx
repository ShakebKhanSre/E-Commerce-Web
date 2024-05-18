import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { menuData } from "../../Assets/dummyData.jsx";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const navigate = useNavigate();

  const onClickCartIcon = () => {
    navigate("/cartDetails");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl28YGkZ396WqdFnxZwHeIsLGXORb1A-vYw2fZzKNcErhnRjodGS_8FeoLVHjYoPb9eO4&usqp=CAU"
          alt="Mountain"
          width="150"
          height="60"
        />
        <p>{"Shopper"}</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link className="Link" to="/">
            All
          </Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>

        {menuData.map((item, index) => (
          <li onClick={() => setMenu(item)}>
            <Link to={`${item}`} className="Link">
              {item}
            </Link>
            {menu === item ? <hr /> : <></>}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("token") ? (
          <div>
            <div className="Cart-Icon">
              <div>
                <img
                  src={
                    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                  }
                />
              </div>
              <div className="Cart-Count" onClick={onClickCartIcon}>
                <span>Check Cart</span>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
