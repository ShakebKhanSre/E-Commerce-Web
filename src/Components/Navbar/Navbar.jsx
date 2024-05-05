import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMenuList } from "../../Redux/Action/Action.jsx";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { menuData } from "../../Assets/dummyData.jsx";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const navigate = useNavigate();

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
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
