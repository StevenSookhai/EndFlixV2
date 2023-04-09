import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { videoModalActions } from "../store/videoModal";
const VideoShowModal = ({ video }) => {
  const dispatch = useDispatch();
  const listOneStyle = "text-sm md:text-lg font-poppins truncate ";
  const listTwoStyle = "sm:text-lg font-poppins truncate";
  const spanStyle = "sm:text-xl font-poppins";
  const img =
    "https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUeuoA1khfzqaYFyd0_HVrA_ePvgLNPDH12DEwsA3nFCAH4bNbTH4Uh0RODjAZDN25_4Bqal2Vk3ub2IGBhYnyg3LtLIDlkL44rL.webp?r=db0";

  const handleCloseModal = () => {
    dispatch(videoModalActions.hideModal());
  };
  return (
    <div className="fixed left-auto w-[90%] sm:w-[82%]  bg-[#181818] md:min-w-[850px] top-10 mb-[2rem] h-[100vh] xl:max-w-[1300px] rounded-lg">
      <div className="relative">
        <div className="h-[60%] w-full rounded-lg relative">
          <div
            onClick={handleCloseModal}
            className=" absolute sm:right-6 right-2 sm:top-5 xs:top-3 sm:w-[35px] w-[20px] bg-[#181818] sm:h-[35px] h-[20px] rounded-full flex justify-center items-center   hover:cursor-pointer"
          >
            <AiOutlineClose size={18} color={"white"} />
          </div>
          <img className="object-cover rounded-t-lg w-full " src={img} alt="" />
        </div>
        <div className="absolute w-[40%] left-[3rem] h-[40%] top-[50%] flex flex-col  ">
          <div className="w-full h-full relative">
            <div>
              <h1 className=" absolute w-full text-white text-6xl sm:text-8xl font-bold max-h-[80%] h-full ">
                Title
              </h1>
            </div>
            <div className="flex gap-2 flex-row h-[20%] absolute w-full bottom-0  items-center">
              <div className="">
                <button className="bannerButton bg-white text-black ">
                  <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                  Play
                </button>
              </div>
              <div className=" sm:w-[50px] w-[30px] bg-zinc-900 sm:h-[50px] h-[30px] rounded-full flex justify-center items-center border-[2px] border-[rgb(187,187,187)] hover:border-white hover:cursor-pointer">
                <MdAdd size={30} color={"white"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full h-[40%] p-4">
        <div className="relative">
          <div className="max-w-[60%]">
            <div className="flex gap-1">
              <span className={spanStyle}>rating</span>
              <span className={spanStyle}>year</span>
              <span className={spanStyle}>duration</span>
              <span className={spanStyle}>episodes</span>
            </div>
            <p className="sm:text-2xl font-poppins mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              natus porro tempora molestiae vel. Quia necessitatibus eum velit
              libero, aliquam possimus, laudantium quae, id fugiat et cupiditate
              minus a vitae?
            </p>
          </div>
          <div className="absolute right-0 top-0 max-w-[40%]">
            <div className="flex">
              Cast:&nbsp;
              <ul className="flex sm:flex-row flex-col gap-1 mb-5 overflow-hidden">
                <li className={`${listOneStyle}`}>Song Joong-ki</li>
                <li className={listOneStyle}>Jeon Yeo-been</li>
                <li className={listOneStyle}>OK Taec-yeon</li>
                <li className={listOneStyle}>more</li>
              </ul>
            </div>
            <div className="flex ">
              Genres:&nbsp;
              <ul className="flex sm:flex-row flex-col gap-1 overflow-hidden ">
                <li className={listTwoStyle}>genre</li>
                <li className={listTwoStyle}>genre</li>
                <li className={listTwoStyle}>genre</li>
                <li className={listTwoStyle}>genre</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowModal;
