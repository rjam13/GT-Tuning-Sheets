import React, { useEffect } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const response = axiosInstance.post("user/logout/blacklist/", {
      refresh_token: Cookies.get("refresh"),
    });
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    navigate("/login");
  });
  return <div>Logout</div>;
}
