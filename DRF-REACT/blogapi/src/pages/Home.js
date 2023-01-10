import React from "react";
// import Cookies from "js-cookie";
import axios from "axios";
import backendURL from "../backendURL";

const Home = () => {
  // console.log(Cookies.get("username"));
  const apiURL = backendURL.value + "/api";
  const axiosInstance = axios.create({
    baseURL: apiURL,
    timeout: 5000,
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJqYW0xMyIsImVtYWlsIjoicmV5QHJleS5jb20iLCJleHAiOjE2NzM0NjcyMTZ9.NYvAurEzI-yTNSy8DEcalV1Bpf2IDpKx0rdUKSc63Sw",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  axiosInstance.get(`user/auth/`).then((res) => {
    console.log(res);
    // navigate("/");
  });
  return <div>Home</div>;
};

export default Home;
