import React from "react";
import footer from "../../assets/image/footer_logo.png";

const Footer = () => {
  return (
    <section className="py-20">
      <hr className="bg-gray-400 h-[2px]" />
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="800"
        className="container w-11/12 lg:w-10/12 mx-auto grid lg:grid-cols-2 py-20 items-center   "
      >
        <div className="text-center lg:text-start ">
          <h1 className="text-4xl font-bold text-[#212352] ">Try for free!</h1>
          <p className=" mx-auto lg:text-lg leading-8 py-5">
            Get limited 1 week free try our features!
          </p>
        </div>
        <div className="md:flex mx-auto gap-4 font-bold">
          <div className="my-3 lg:my-0 mx-auto">
            <button
              type="button"
              className="w-fit px-10 py-5 bg-pink-400 text-white rounded-full shadow-lg"
            >
              Learn More
            </button>
          </div>
          <div className="my-3 lg:my-0 mx-auto flex justify-center">
            <button className="bg-white  flex items-center gap-x-[20px] group shadow-lg px-10 rounded-full hover:bg-purple-400 hover:text-white ease-in-out duration-500">
              Request Demo
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-2xl text-purple-400 group-hover:text-white transition"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ==== Footer Menu ===== */}
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="800"
        className="container w-11/12 lg:w-10/12 mx-auto lg:flex justify-center"
      >
        <div className="md:w-[35%] mx-auto py-5">
          <img src={footer} className="mx-auto md:mx-0" alt="" />
          <h1 className="font-bold text-[#212352]  py-5 text-center lg:text-start">
            Warehouse Society, 234 Bahagia <br /> Ave Street PRBW 29281
          </h1>
          <p className="leading-8 italic text-center lg:text-start">
            info@warehouse.project <br /> 1-232-3434 (Main)
          </p>
        </div>
        <div className="md:w-[20%] mx-auto flex  justify-center py-5 ">
          <div className="mx-auto">
            <h1 className="font-bold text-[#212352]">About</h1>
            <div className="leading-10 py-5">
              <p>Profile</p>
              <p>Features</p>
              <p>Careers</p>
              <p> DW News</p>
            </div>
          </div>
        </div>
        <div className="md:w-[20%] mx-auto flex  justify-center py-5">
          <div className="mx-auto">
            <h1 className="font-bold text-[#212352]">Help</h1>
            <div className="leading-10 py-5">
              <p>Support</p>
              <p>Sign Up</p>
              <p>Guide</p>
              <p>Reports</p>
              <p>Q & A</p>
            </div>
          </div>
        </div>
        <div className="md:w-[35%] text-center mx-auto py-5">
          <h1 className="font-bold text-[#212352] text-center">Social Media</h1>
          <div className="flex gap-4 justify-center py-10">
            <div className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
              </svg>
            </div>
            <div className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
              </svg>
            </div>
            <div className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ==== copyright ==== */}
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="800"
        className="container w-11/12 lg:w-10/12 mx-auto lg:flex justify-between text-center lg:text-start"
      >
        <div>
          <p>
            © Datawarehouse™, 2020. All rights reserved. Company <br />{" "}
            Registration Number: 21479524.
          </p>
        </div>
        <div className="">
          <div className="h-12 w-12 rounded-full bg-purple-300 flex justify-center items-center mx-auto lg:mx-0">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16v12m-3-5h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
