import React from "react";
import HeroVideo from "../components/HeroVideo";
import { useSelector } from "react-redux";
import Navbar from "../components/NavBar.jsx";
const browsePage = () => {
  const profile = useSelector((state) => state.auth.profile);
  console.log(profile);
  return (
    <div className="w-full h-full">
      <Navbar />
      <HeroVideo />
    </div>
  );
};

export default browsePage;
