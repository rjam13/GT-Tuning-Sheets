import React from "react";
import axiosInstance from "../axios";

const Home = () => {
  axiosInstance.get(`user/auth/`).then((res) => {
    console.log(res);
  });
  return <div>Home</div>;
};

export default Home;
