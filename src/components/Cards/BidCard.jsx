import React from "react";
import { slider_data } from "../Data/slider_data";
import img1 from "../../assets/item/item_1.jpg";

const BidCard = () => {
  return (
    <>
      <div>
        <h1 className="mb-20 mt-20 font-bold text-4xl text-center">Hot Bids</h1>
      </div>
      <div className="flex flex-wrap ">
        {slider_data.map((key) => {
          return (
            <div
              className="w-full hover-up-5 rounded-full shadow-one text-center mt-12 lg:w-1/3 md:w-1/2 pt-4 pb-8 wow animate-animated animate_fadeIn"
              data-wow-delay=".2s"
            >
              <div className="p-12 m-6 bg-white shadow rounded-one">
                <img
                  className="h-96 w-80 rounded-md mx-auto my-4"
                  src={img1}
                  alt=""
                />
              </div>

              <div>
                <h3 className="mb-2 text-3xl font-bold font-heading">
                  {key.title}
                </h3>
                <p className="text-blueGray-400 leading-loose text-sm">
                  {key.bid}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BidCard;
