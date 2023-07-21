import React from "react";
import Hero from "../../assets/image/hero-img.png";
const Home = () => {
  return (
    <section id="home" className="pt-40">
      <section className="w-11/12 container  lg:w-10/12 mx-auto text-center lg:text-start">
        <h1 className="lg:text-[80px] text-4xl leading-[1] font-bold lg:w-7/12 text-[#212353]">
          Save your data storage here.
        </h1>
        <div className=" lg:flex ">
          <div className={` lg:w-[30%] py-10 lg:py-0`}>
            <div>
              <p className="lg:py-20 pb-10 text-lg">
                Data Warehouse is a data storage area that has been tested for
                security, so you can store your data here safely but not be
                afraid of being stolen by others.{" "}
              </p>

              <button
                type="button"
                className="px-8 py-4 bg-purple-400 text-white rounded-full"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className=" lg:justify-end  ">
            <div className="">
              <img className="object-contain" src={Hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
