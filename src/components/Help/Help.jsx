import React from "react";
import about from "../../assets/image/about.png";
const Help = () => {
  return (
    <section id="help" className="py-20">
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="700"
        className="w-11/12 container lg:w-9/12  mx-auto grid lg:grid-cols-2 bg-purple-100 items-center rounded-3xl "
      >
        <div>
          <img
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="800"
            src={about}
            alt=""
          />
        </div>
        <div className="lg:w-10/12 mx-auto text-center lg:text-start">
          <h1
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="900"
            className="text-4xl font-bold text-[#212352] "
          >
            We are a high-level data storage bank
          </h1>
          <p
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="1000"
            className="py-5 text-base leading-8 px-2"
          >
            The place to store various data that you can access at any time
            through the internet and where you can carry it. This very flexible
            storage area has a high level of security. To enter into your own
            data you must enter the password that you created when you
            registered in this Data Warehouse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Help;
