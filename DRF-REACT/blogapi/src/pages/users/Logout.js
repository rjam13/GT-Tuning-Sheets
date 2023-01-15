import React, { useEffect } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // const response = axiosInstance.post("user/logout/blacklist/", {
    //   refresh_token: Cookies.get("refresh"),
    // });
    axiosInstance.post(`user/logout/`).then((res) => {
      console.log(res);
    });
    // Cookies.remove("access_token");
    // Cookies.remove("refresh_token");
    // axiosInstance.defaults.headers["Authorization"] = null;
    Cookies.remove("username");
    Cookies.remove("token");
    navigate("/");
  });
  return <div>Logout</div>;
}
