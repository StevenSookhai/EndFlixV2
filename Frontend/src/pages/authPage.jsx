import React from "react";
import AuthForm from "../components/authForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { layout } from "../style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/ ");
  };

  const backgroundImage =
    "https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/28ef60c5-74bc-46ba-b4e4-84c6e431eef6/US-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
  return (
    <div>
      <div className="relative z-10">
        <div>
          <img
            onClick={handleNavigate}
            className="w-[150px] h-[62px] top-8 ml-10 sm:ml-20 absolute cursor-pointer"
            src="https://endflix-seeds.s3.amazonaws.com/logo.png"
          ></img>
        </div>
      </div>

      <div className="overflow-y-auto h-screen w-screen fixed">
        <div className="w-full h-full bg-[rgb(0,0,0,0.6)] sm:block hidden absolute"></div>

        <img
          src={backgroundImage}
          className="hidden sm:inline-block w-full h-full overflow-y-auto object-cover "
          alt="Your image description"
        />
      </div>
      <div className="absolute sm:h-[80%] h-[100%] w-full flex justify-center sm:mt-[100px]">
        <AuthForm
          possibleEmail={
            location.state?.emailInput ? location.state?.emailInput : ""
          }
        />
      </div>
      <div
        className={`flex flex-col items-center justify-center sm:px-16 px-6 sm:py-12 py-4  absolute bottom-0  w-full h-[250px] max-w-full border-5 text-center text-white border-b-8 border-t-8 border-[rgb(52,52,52)] bg-[rgb(0,0,0,0.75)]  font-poppins z-20`}
      >
        Disclaimer: This website is not affiliated with or endorsed by Netflix
        Inc. It is a clone created solely for the purpose of showcasing
        technical skills. All images, videos, and logos used on this website
        belong to their rightful owners and are used solely for educational and
        non-commercial purposes. I do not claim any ownership or copyright over
        these materials.{" "}
        <div className="mt-2 flex gap-2">
          <div className=" cursor-pointer w-[50px] h-[50px] ">
            <Link to="https://www.linkedin.com/in/steven-sookhai-37192a22a/">
              {" "}
              <CiLinkedin size={40} />
            </Link>
          </div>
          <div className=" cursor-pointer ">
            <Link
              className="h-full w-full  
            "
              to="https://github.com/StevenSookhai"
            >
              <GrGithub size={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
