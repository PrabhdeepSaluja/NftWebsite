import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider_data } from "../Data/slider_data";
import item1 from "../../assets/item/item_1.jpg";

const Slider1 = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
      >
        return (
        <SwiperSlide>
          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white transition-shadow hover:shadow-lg text-jacarta-500">
            <figure>
              <a href={item1}>
                <div className="w-full">
                  <span>
                    <h1>NFT 1</h1>
                  </span>
                </div>
              </a>
            </figure>
          </div>
        </SwiperSlide>
        );
      </Swiper>
    </>
  );
};

export default Slider1;
