import React, { useState } from "react";
import {
  all_data,
  arts_data,
  collectibles_data,
  domain_data,
  music_data,
  photography_data,
  virtual_world_data,
} from "../Data/tab_data";

const Tab = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="pt-20 pb-4 flex flex-wrap">
      <div className="w-full">
        <ul className="flex flex-wrap items-center" role="tablist">
          <li className="text-center flex-auto">
            <a
              className={
                "text-lg font-bold uppercase shadow-lg block" +
                (openTab === 1 ? "tab-active" : "text-sky-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              All
            </a>
          </li>
          <li className="text-center flex-auto">
            <a
              className={
                "text-lg font-bold uppercase shadow-lg block" +
                (openTab === 1 ? "tab-active" : "text-sky-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Art
            </a>
          </li>
          <li className="text-center flex-auto">
            <a
              className={
                "text-lg font-bold uppercase shadow-lg block" +
                (openTab === 2 ? "tab-active" : "text-sky-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Collectibles
            </a>
          </li>
          <li className="text-center flex-auto">
            <a
              className={
                "text-lg font-bold uppercase shadow-lg block" +
                (openTab === 3 ? "tab-active" : "text-sky-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Domain
            </a>
          </li>
          <li className="text-center flex-auto">
            <a
              className={
                "text-lg font-bold uppercase shadow-lg block" +
                (openTab === 4 ? "tab-active" : "text-sky-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link4"
              role="tablist"
            >
              Music
            </a>
          </li>
          <li className="text-center flex-auto">
            <a
              className={
                "text-lg font-bold uppercase shadow-lg block" +
                (openTab === 5 ? "tab-active" : "text-sky-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#link5"
              role="tablist"
            >
              Photography
            </a>
          </li>
          <li className="text-center flex-auto">
            <a
              className={
                "text-lg font-bold uppercase shadow-lg block" +
                (openTab === 5 ? "tab-active" : "text-sky-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Virtual World
            </a>
          </li>
        </ul>

        <section className="bg-blueGray-50 pb-24">
          <div className="container">
            {/* Tab 1 */}
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="flex flex-wrap -mx-3 -mb-6">
                {all_data.map((key) => {
                  return (
                    <div
                      className="w-full hover-up-5 rounded-full shadow-one text-center mt-12 lg:w-1/3 md:w-1/2 pt-4 pb-8 wow animate-animated animate_fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="p-12 m-6 bg-white shadow rounded-one">
                        <img
                          className="h-96 w-80 rounded-md mx-auto my-4"
                          src={key.img}
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
            </div>

            {/* Tab 2 */}
            <div className={openTab === 2 ? "block" : "hidden"} id="link1">
              <div className="flex flex-wrap -mx-3 -mb-6">
                {arts_data.map((key) => {
                  return (
                    <div
                      className="w-full hover-up-5 rounded-full shadow-one text-center mt-12 lg:w-1/3 md:w-1/2 pt-4 pb-8 wow animate-animated animate_fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="p-12 m-6 bg-white shadow rounded-one">
                        <img
                          className="h-96 w-80 rounded-md mx-auto my-4"
                          src={key.img}
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
            </div>

            {/* Tab 3 */}
            <div className={openTab === 3 ? "block" : "hidden"} id="link1">
              <div className="flex flex-wrap -mx-3 -mb-6">
                {collectibles_data.map((key) => {
                  return (
                    <div
                      className="w-full hover-up-5 rounded-full shadow-one text-center mt-12 lg:w-1/3 md:w-1/2 pt-4 pb-8 wow animate-animated animate_fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="p-12 m-6 bg-white shadow rounded-one">
                        <img
                          className="h-96 w-80 rounded-md mx-auto my-4"
                          src={key.img}
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
            </div>

            {/* Tab 4 */}
            <div className={openTab === 4 ? "block" : "hidden"} id="link1">
              <div className="flex flex-wrap -mx-3 -mb-6">
                {domain_data.map((key) => {
                  return (
                    <div
                      className="w-full hover-up-5 rounded-full shadow-one text-center mt-12 lg:w-1/3 md:w-1/2 pt-4 pb-8 wow animate-animated animate_fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="p-12 m-6 bg-white shadow rounded-one">
                        <img
                          className="h-96 w-80 rounded-md mx-auto my-4"
                          src={key.img}
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tab;
