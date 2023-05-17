import React from "react";
import { useLocation } from "react-router-dom";

const Pages = () => {
  const mystyle = {
    textAlign: "center",
  };

  const location = useLocation();
  const { title, img, description } = location.state;
  console.log(title);
  return (
    <div className="page">
      <h1 style={mystyle}>{title}</h1>
      <div className="myimg">
        <img className="myimage" src={img} alt="" />
      </div>
      <div className="mytxt">
        <p className="mytext">{description}</p>
      </div>
    </div>
  );
};

export default Pages;
