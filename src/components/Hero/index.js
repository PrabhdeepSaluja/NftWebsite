import React from "react";
import hero from "../../assets/hero.jpg";
import animated from "../../assets/3D_elements.png";
import Slider1 from "../Sliders/Slider1";
import BidCard from "../Cards/BidCard";

const index = () => {
  return (
    <>
      <div className="container">
        <div className="flex -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
                <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center text-5xl dark:text-white md:text-left ">
                  Buy, Sell And Collect NFTs.
                </h1>
                <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
                  The Worlds Largest Digital Marketplace For Crypto Collectibles
                  And Non-Fungible Tokens
                </p>
                <div className="flex space-x-4 ml-6">
                  <a
                    // className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 "
                    className="bg-[#6336e4] w-[200px] rounded-full font-bold text-xl my-6 mx-auto py-5 text-white text-center"
                    href=""
                  >
                    Upload
                  </a>
                  <a
                    // className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 "
                    className="bg-white w-[200px] rounded-full font-large-800 my-6 mx-auto py-5  text-[#6336e4] font-bold text-xl text-center"
                    href=""
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-8">
            <div className="relative flex flex-wrap text-center md:pl-8 md:text-right mt-16 h-4/5 w-4/5 float-right rotate-[8deg]">
              <img src={hero} alt="Hoicko" />
            </div>
            {/* <div
            className="absolute"
            style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}
          >
            <img
              className="jump rounded wow animate__animated animate__fadeIn"
              src={animated}
              alt="Hoicko"
            />
          </div> */}
          </div>
        </div>
      </div>

      {/* Hot Bids */}

      <BidCard />
      {/* <div className="container mt-24">
        <div>
          <h2 className="text-center text-5xl font-bold">Hot Bids</h2>
        </div>
        <div className="relative">
          <div className="">
            <Slider1 />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default index;
