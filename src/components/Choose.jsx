import React from "react";
import logo from "../assets/choose1.png";
import star from "../assets/star.png";
import bg3 from "../assets/bg3.png";

const Choose = () => {
  return (
    <div className="choose font-lexend">
      <div className="container py-[150px] ">
        <p className="flex justify-center gap-2 mb-5">
          {" "}
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </p>
        <h2 className="font-bold text-[24px] md:text-[28px] lg:text-[32px] font-lexend text-center text-[#53AB78]">
          {" "}
          <span className="text-[#007869]"> Why </span> Choose Us?{" "}
        </h2>
        <p className="text-sm md:text-base text-[#434343] w-2/3 text-center mx-auto">
          {" "}
          With our experience of more than 20 years and good knowledge of human
          resources, our team can proactively give recommendations, advice, and
          solutions for all customer's needs.
        </p>

        {/* flex */}

        <div className="flex  mt-16 flex-col md:flex-row">
          {/* 1 */}
          <div className="w-full md:w-1/3 px-6 py-3">
            <div className=" flex  items-center mb-3 ">
              <img
                src={logo}
                alt=""
                className=" me-5 w-[15px] h-[15px] md:w-[19px] md:h-[19px]"
              />
              <h4 className="font-bold text-[#232323] text-base md:text-[18px]">
                {" "}
                Dedication Service
              </h4>
            </div>

            <p className="text-sm md:text-[14px]">
              Provide client services specialist to all customers which focus on
              human resources management issues.
            </p>
          </div>

          {/* 2 */}
          <div className="w-full md:w-1/3 px-6 py-3">
            <div className=" flex  items-center mb-3">
              <img
                src={logo}
                alt=""
                className=" me-5 w-[15px] h-[15px] md:w-[19px] md:h-[19px]"
              />
              <h4 className="font-bold text-[#232323] text-base md:text-[18px]">
                {" "}
                Comprehensive Services
              </h4>
            </div>
            <p className="text-sm md:text-[14px]">
              Provide services such as recruitment & selection, working
              placements, monitoring & evaluation employees performance,
              compensation & benefits.
            </p>
          </div>

          {/* 3 */}
          <div className="w-full md:w-1/3 px-6 py-3 ">
            <div className=" flex items-center  mb-3">
              <img
                src={logo}
                alt=""
                className=" me-5 w-[15px] h-[15px] md:w-[19px] md:h-[19px]"
              />
              <h4 className="font-bold text-[#232323] text-base md:text-[18px]">
                {" "}
                Best Human Capital Information System
              </h4>
            </div>
            <p className="text-sm md:text-[14px]">
              Provide best human capital information system for fast data
              management with high quality of accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
