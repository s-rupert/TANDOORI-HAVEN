import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return;
    }
    console.log("hi")
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
        }
        console.log("this: response",response)

      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  }, []); // 🔹 Runs only once when component mounts

  return <div>Logging out...</div>;
};

export default UserLogout;
