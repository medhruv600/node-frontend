import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";

const Bollywood = () => {
  const [value, setValue] = useState([]);
  console.log(value);
  useEffect(() => {
    const url = "https://node-backend-yodg.onrender.com/bolly";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setValue(res));
  }, []);

  return (
    <div>
      <Header />
      <Nav />

      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
      <h1 style={{ margin: "60px 0px 0px 50%", display: "inline-block" }}>
        Posts
      </h1>
      <div className="main-container">
        <div className="main1">
          {value.map((item) => (
            <Card
              key={item.id}
              articleid={item.id}
              imgUrl={item.img}
              title={item.title}
              description={item.description.slice(0, 200)}
              author={item.author}
            />
          ))}
        </div>

        <div className="main2">
          {value.map((item) => (
            <Card2
              key={item.id}
              articleid={item.id}
              imgUrl={item.img}
              description={item.description.slice(0, 200)}
              title={item.title.slice(0, 25)}
              author={item.author}
            />
          ))}

          <div className="ad">
            <p>Advertisement</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Bollywood;
