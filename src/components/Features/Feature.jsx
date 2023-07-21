import React from "react";
import feature1_bg from "../../assets/image/feature1_bg.png";
import feature2_bg from "../../assets/image/feature2_bg.png";
import feature3_bg from "../../assets/image/feature3_bg.png";
import feature4_bg from "../../assets/image/feature4_bg.png";
import feature1 from "../../assets/image/feature1.png";
import feature2 from "../../assets/image/feature2.png";
import feature3 from "../../assets/image/feature3.png";
import feature4 from "../../assets/image/feature4.png";
const Feature = () => {
  const features = [
    {
      img: feature1,
      bg: feature1_bg,
      title: "Search Data",
      desc: `Don’t worry if your data is very large, the Data Warehouse
      provides a search engine, which is useful for making it easier to
      find data effectively saving time.`,
    },
    {
      img: feature2,
      bg: feature2_bg,
      title: "24 Hours Access",
      desc: `Access is given 24 hours a full morning to night and meet again in
      the morning, giving you comfort when you need data when urgent..`,
    },
    {
      img: feature3,
      bg: feature3_bg,
      title: "Print Out",
      desc: `Print out service gives you convenience if someday you need print
      data, just edit it all and just print it.`,
    },
    {
      img: feature4,
      bg: feature4_bg,
      title: "Security Code",
      desc: `Data Security is one of our best facilities. Allows for your files
      to be safer. The file can be secured with a code or password than
      you created, so only you can open the file.`,
    },
  ];
  return (
    <section id="features" className="py-10">
      <div
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="800"
        className="container w-11/12 lg:w-10/12 mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-[#212352] ">Features</h1>
        <p className="py-10 lg:w-6/12 text-center mx-auto lg:text-lg leading-8 px-2">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className="container w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 gap-[50px] lg:grid-cols-2 py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="400"
          >
            <div className="hidden lg:flex absolute top-0 right-0 -z-10">
              <img src={feature.bg} />
            </div>
            <div
              className="max-w-[120px] xl:mr-7 xl:max-w-[232px] aos-init aos-animate"
              data-aos="zoom-in-right"
              data-aos-delay="400"
            >
              <img src={feature.img} />
            </div>
            <div className="max-w-[220px]">
              <h3 className="h3 mb-4">{feature.title}</h3>
              <p className="font-light italic mb-4">{feature.desc}</p>
              <div className="flex items-center gap-x-2 group">
                <a className="text-primary font-bold" href="#">
                  Learn more
                </a>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="text-xl text-accent-primary group-hover:ml-[5px] transition-all"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
