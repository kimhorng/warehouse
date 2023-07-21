import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import $ from "jquery";
import "./header.css";
const Header = () => {
  const goToByScroll = (id) => {
    $("html,body").animate({ scrollTop: $("#" + id).offset().top }, "slow");
    // $(`p.${id}`).css("background-color", "blue");
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headers = [
    {
      nav: "Home",
      section: "home",
    },
    {
      nav: "Help",
      section: "help",
    },
    {
      nav: "Features",
      section: "features",
    },
    {
      nav: "Signup",
      section: "",
    },
  ];
  return (
    <nav className={scrolled ? "scrolled  shadow" : ""}>
      <div className=" w-10/12 container flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
        </a>
        <div className="flex md:order-2">
          <button className="bg-white  flex items-center gap-x-[20px] group shadow-lg border-[1px] px-10 py-5 rounded-full hover:bg-purple-400 hover:text-white ease-in-out duration-500">
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

          <div className="text-center flex lg:hidden">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* ===== Drawer =======*/}

          <div
            id="drawer-right-example"
            className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
            tabindex="-1"
            aria-labelledby="drawer-right-label"
          >
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            </a>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover: rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            {/* Drawer */}
            <div className="py-10">
              <ul className="text-2xl leading-10">
                {headers.map((header, index) => (
                  <li key={index}>
                    <p
                      onClick={() => goToByScroll(header.section)}
                      className="home block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      {header.nav}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* -==== Drawer End ====== */}
        </div>

        {/* ==== Menu ====== */}
        <div
          className="items-cente hidden w-full lg:flex md:w-auto md:order-1 "
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {headers.map((header, index) => (
              <li key={index}>
                <p
                  onClick={() => goToByScroll(header.section)}
                  className="home block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {header.nav}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ==== Menu End ====== */}
      </div>
    </nav>
  );
};

export default Header;
