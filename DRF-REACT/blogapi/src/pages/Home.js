import React from "react";
import Cookies from "js-cookie";


const Home = () => {
  console.log(Cookies.get("username"));
  return <div>Home</div>;
};

export default Home;
