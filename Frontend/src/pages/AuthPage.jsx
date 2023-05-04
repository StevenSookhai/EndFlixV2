import React from "react";
import AuthForm from "../components/AuthForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { layout } from "../style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import LoadingSpinner from "../components/Loader";
const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const handleNavigate = () => {
    navigate("/ ");
  };

  const handleLoading = () => {
    setIsLoading(!isloading);
    console.log(isloading);
  };

  const backgroundImage =
    "https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/28ef60c5-74bc-46ba-b4e4-84c6e431eef6/US-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
  return (
    <>
      {isloading && <LoadingSpinner />}
      {!isloading && (
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
          <div className="absolute sm:h-[80%] h-[100%] w-full flex justify-center sm:mt-[100px]   ">
            <AuthForm
              possibleEmail={
                location.state?.emailInput ? location.state?.emailInput : ""
              }
              handleLoading={handleLoading}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
