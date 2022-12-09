import React from "react";

const index = () => {
  return (
    <div className="py-20 bg-blue">
      <div className="container px-4 mx-auto wow animate__animate__fadeIn animated">
        <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
          <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
            <a
              className="inline-block bg-none mx-auto lg:mx-0 text-3xl font-semibold leading-none"
              href="/"
            >
              <img
                className="h-10"
                src="https://monst-nextjs.vercel.app/assets/imgs/logos/monst-logo.svg"
                alt=""
              />
            </a>
          </div>

          <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
            <p className="max-w-md mx-auto lg:mx-w-full lg:mx-0 lg:pr-32 lg:text-lg text-gray-400 leading-relaxed">
              Manage <strong>everything</strong> everywhere with a no-code app.
            </p>
          </div>

          <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-gray-400">
              Address
            </p>
            <p className="lg:text-lg text-gray-400">
              33 Darshapura, opp. M.B. college, Udaipur, Rajasthan 313001
            </p>
          </div>

          <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-gray-400">
              Contacts
            </p>
            <p className="lg:text-lg text-gray-400">7976238342</p>
            <p className="lg:text-lg text-gray-400">Hello@john.Com</p>
          </div>

          <div className="flex flex-col lg:flex-col items-center lg:justify-between">
            <p className="text-sm text-gray-400 ">© All rights reserved </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <a
                className="bg-none inline-block px-2"
                href="https://facebook.com"
              >
                <img
                  src="https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg"
                  alt="Monst"
                />
              </a>
              <a
                className="bg-none inline-block px-2"
                href="https://twitter.com"
              >
                <img
                  src="https://monst-nextjs.vercel.app/assets/imgs/icons/twitter-blue.svg"
                  alt="Monst"
                />
              </a>
              <a
                className="bg-none inline-block px-2"
                href="https://www.instagram.com"
              >
                <img
                  src="https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"
                  alt="Monst"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
