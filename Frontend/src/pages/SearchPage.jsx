import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import SearchNavBar from "../components/SearchNavBar";
const SearchPage = ({ searchQuery }) => {
  return (
    <div>
      <SearchNavBar searchQuery={searchQuery} />
      <div className="w-full h-full flex justify-center flex-col relative">
        <div className="ml-[4%] mr-[4%] mt-[10vh]">
          <h1 className="text-2xl font-poppins mb-[5%] ">Search Results</h1>
          <div>
            <div className="flex flex-wrap mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
