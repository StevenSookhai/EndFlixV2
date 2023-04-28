import React from "react";
import styles from "../../style";
import { layout } from "../../style";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

const splashPage = () => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  };
  const handleGetStarted = () => {
    navigate("/login", { state: { emailInput: emailInput } });
  };
  const backgroundImage =
    "https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/dd2786e8-9d8a-4c59-a1fc-0f85cf5efda4/US-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  return (
    <div>
      <div className="relative z-10">
        {/* <svg className="w-[110px] h-[32px] top-10 ml-20 absolute">
          <path
            className="fill-current text-[#E50914]"
            d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
          ></path>
        </svg> */}
        <div>
          <img
            className="w-[150px] h-[62px] top-8 ml-10 sm:ml-20 absolute"
            src="https://endflix-seeds.s3.amazonaws.com/logo.png"
          ></img>
        </div>

        <a
          href="/login"
          className="w-[85px] h-[34px] r-0  bg-[#E50914] text-center p-1 font-poppins rounded-sm
          text-white text-md absolute right-10 top-10 "
        >
          Sign In
        </a>
      </div>
      <div className="relative h-[750px] border-5 border-b-8 border-[rgb(52,52,52)]">
        <div className="w-full h-full relative xs:">
          <div className="w-full h-full bg-gradient-to-b from-[rgb(0,0,0)] via-[rgb(0,0,0,.5)] to-[#000000] absolute"></div>
          <img
            className="object-cover w-full h-full z-[-1]"
            src={backgroundImage}
          ></img>
        </div>
        {/*section 1 content */}
        <div className="absolute top-[30%] left-0 right-0 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-white text-center  xs:text-3xl sm:text-4xl md:text-6xl  text-8xl font-bold font-poppins leading-tight">
              Unlimited movies, TV <br className=" hidden sm:block"></br>shows,
              and more.
            </h2>
            <h4 className="text-white xs:text-lg md:text-2xl text-2xl mt-5 font-poppins">
              Watch anywhere. Cancel anytime.
            </h4>
            <p className="text-white xs:text-lg md:text-lg text-lg mt-5 font-poppins">
              Ready to watch? Enter your email to{" "}
              <br className=" block sm:hidden"></br>create or restart your
              membership.
            </p>
            <div className="flex xs:flex-col sm:flex-row justify-center items-center">
              <input
                onChange={handleEmailInput}
                placeholder="Email Address"
                className="bg-white w-[500px] h-[150px] xs:w-[400px] xs:h-[50px] sm:w-[400px] sm:h-[50px] md:w-[500px] md:h-[70px] mt-5 text-black font-poppins text-lg px-5 rounded-sm"
              ></input>
              <button
                onClick={handleGetStarted}
                className="bg-[#E50914] h-[150px] xs:w-[200px] xs:h-[50px] sm:w-[200px] sm:h-[50px] md:w-[200px] md:h-[70px] mt-5 text-white font-poppins text-lg px-5 rounded-sm "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />
      {/* section5 Social Links*/}
      <div
        className={`flex flex-col items-center justify-center sm:px-16 px-6 sm:py-12 py-4 bg-black w-full h-[250px] max-w-full border-5 text-center text-white border-b-8 border-[rgb(52,52,52)] font-poppins`}
      >
        Disclaimer: This website is not affiliated with or endorsed by Netflix
        Inc. It is a clone created solely for the purpose of showcasing
        technical skills. All images, videos, and logos used on this website
        belong to their rightful owners and are used solely for educational and
        non-commercial purposes. I do not claim any ownership or copyright over
        these materials.
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

export default splashPage;
