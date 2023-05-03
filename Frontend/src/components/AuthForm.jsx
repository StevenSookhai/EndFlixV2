import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { authActions } from "../store/authSlice";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ possibleEmail }) => {
  // console.log(possibleEmail);
  const [toggle, setToggle] = useState(true); // true = sign in, false = sign up
  const [email, setEmail] = useState(possibleEmail);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (possibleEmail) {
      setEmail(possibleEmail);
    }
  }, []);

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();

      const url = toggle
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/signup";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        credentials: "include", // This is required to send the cookie
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(authActions.login(data.user));

        if (data.user) navigate("/profiles");
        else if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (error) {
      console.error("An error occurred: ", error);
    }
  };

  return (
    <div className="sm:min-h-[660px] sm:min-w-[450px] sm:max-h-[660px] sm:max-w-[450px] w-full h-[100%] bg-[rgb(0,0,0,0.75)] pt-[60px] pr-[68px] pb-[40px] pl-[68px] rounded-md">
      <div className="flex flex-col items-center justify-center min-w-[314px] min-h-[317px]  ">
        <h2 className="w-full h-[25px] text-left text-white font-bold text-4xl ">
          {toggle ? "Sign In" : "Sign Up"}
        </h2>

        <form className="flex flex-col items-center justify-center z-10 sm:w-[314px] sm:h-[400px] w-full mt-[20px] sm:mt-0 ">
          <div className="relative mt-5 w-full">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="bg-[rgb(51,51,51)] w-full h-[50px] py-2 pl-3 pr-10 rounded-sm focus:bg-[rgb(80,80,80)] "
              placeholder="Email"
              value={email}
            />
            {/* <label
              htmlFor="input-field"
              className="absolute left-0 top-3 text-gray-400 text-lg pl-4 transition-all duration-100 ease-in-out font-poppins"
            >
              Email
            </label> */}
          </div>
          <div className="relative mt-5 w-full">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className=" bg-[rgb(51,51,51)] w-full h-[50px] py-2 pl-3 pr-10 rounded-sm focus:bg-[rgb(80,80,80)]"
              placeholder="Password"
            />
            {/* <label
              htmlFor="input-field"
              className="absolute left-0 top-3 focus:mb-4 text-gray-400 text-lg pl-2 transition-all duration-100 ease-in-out font-poppins"
            >
              Password
            </label> */}
            <ul className=" mt-3">
              {Object.keys(errors).map((error, idx) => (
                <li
                  key={idx}
                  className="text-[#e87c03] font-poppins font-semibold"
                >
                  {errors[error]}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleSignIn}
            className="mt-12 bg-[#E50914] w-full min-h-[50px] rounded-sm font-poppins text-white text-lg font-bold"
            type="submit"
          >
            {toggle ? "Sign In" : "Sign Up"}
          </button>
          <button
            className="mt-6 bg-[#E50914] w-full min-h-[50px] rounded-sm font-poppins text-white text-lg font-bold"
            type="submit"
          >
            Demo
          </button>
        </form>
      </div>
      <div className={`flex flex-row mt-2 ${errors ? "mt-14" : ""}`}>
        <p className="text-[#737373] text-center mr-1">New to Endflix? </p>
        <button className="font-bold" onClick={() => setToggle(!toggle)}>
          {toggle ? "Sign up now" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
