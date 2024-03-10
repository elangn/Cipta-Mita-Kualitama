import React from "react";
import about1 from "../assets/about1.png";
import download from "../assets/download.png";
import lingkaran from "../assets/lingkaran.png";

const About = () => {
  return (
    <div className="about">
      <img src={lingkaran} alt="" className="absolute " />
      <div className="container   pt-[100px] about">
        <div className="flex w-2/3 mx-auto gap-5  flex-col md:flex-row">
          {/* kiri */}
          <div className="w-full md:w-1/2 z-10">
            <img
              src={about1}
              alt=""
              className=" w-[300px] md:w-[358px] h-[auto] z-10"
            />
          </div>

          {/* kanan */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0 pb-6 md:pb-2">
            <div className="border-b-2 border-[#E3CF5F] w-[77px] "></div>
            <h2 className="font-lexend  font-bold text-[24px] md:text-[28px] lg:text-[32px] text-[#E3CF5F] mt-2">
              {" "}
              About us
            </h2>
            <p className=" text-[12px] md:text-[14px]  leading-[24px] font-lexend text-white mt-4">
              {" "}
              Cipta Mitra Kualitama (CMK) is a national company that has been
              providing outsourcing services for over 20 years. We use all our
              experiences and knowledge to support our client-built
              organizations with low cost and high performance. Our services
              will help clients increase efficiency and productivity and chance
              to focus on their product and the core function of the company.{" "}
            </p>

            <a href="" className="flex mt-10 gap-3 w-fit  border-b pb-2">
              <img src={download} alt="" className="w-[20px] h-[20px]" />
              <span className="text-white text-sm md:text-md">
                {" "}
                Download our Company profile
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
