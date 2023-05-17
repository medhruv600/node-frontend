import React from "react";
import { Link } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./Footer";

const PageDetail = () => {
  return (
    <div className="main">
      <Pages />
      <div className="mybtn">
        <Link to="/">
          {" "}
          <button className="mybutton">Go Home</button>{" "}
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PageDetail;
