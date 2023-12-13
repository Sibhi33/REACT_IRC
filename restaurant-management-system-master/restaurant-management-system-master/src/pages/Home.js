import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/HomeStyles.css";
import { Link } from "react-router-dom";

const Home = () => {
  let items = [
    {
      img: "./carosel/img1.jpeg",
      name: "Dosa",
      price: "100/- rs",
    },
    {
      img: "./carosel/img2.jpeg",
      name: "Veggie Platter",
      price: "200/- rs",
    },
    {
      img: "./carosel/img3.jpeg",
      name: "Panneer Do Pyaaz",
      price: "150/- rs",
    },
  ];

  return (
    <Layout>
      <div>
        <h1 style={{ color: "red", margin: 20, textAlign: "center" }}>
          {" "}
          🥮Services that we offer!!
        </h1>
        <marquee className='oo'>//We shape out the best out of your business//</marquee>
        <div className="contain-box">
          {items.map((value) => (
            <div className="img">
              <img
                src={value.img}
                alt="images"
                height="250px"
                width="500px"
              ></img>
              <div className="details">
                <Link to={"./menu"}>
                  <button> click to order!</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
    
  );
};
export default Home;
