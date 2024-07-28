import React from "react";
import { enums } from "../../Enums/Enums";
import "./Footer.css";

const Footer = ({ className }) => {
  const footerOptions = [
    "HOME",
    "AGENT",
    "ABOUT",
    "LISTING",
    "BLOG",
    "CONTACT",
  ];

  const socialWebIconUrl = [
    "https://cdn3.iconfinder.com/data/icons/basicolor-reading-writing/24/077_twitter-512.png",
    "https://cdn-icons-png.flaticon.com/512/3665/3665167.png",
    "https://cdn-icons-png.freepik.com/512/270/270014.png",
  ];
  return (
    <div className="Footer">
      <h2>{"Shopper"}</h2>
      <div className={className}>
        {footerOptions.map((item, index) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="Social-Icon">
        {socialWebIconUrl.map((item, index) => (
          <img src={item} height="50px" />
        ))}
      </div>
      <p>{enums.copyRight}</p>
    </div>
  );
};

export default Footer;
