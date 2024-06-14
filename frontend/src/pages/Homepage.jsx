import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg";
export default function Homepage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="h-[100vh]">
      <div className="">
        <img className="w-full max-h-fit" src={banner} alt="" />
      </div>
    </div>
  );
}
