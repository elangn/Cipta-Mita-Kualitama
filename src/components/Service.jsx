import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import lingkaran2 from "../assets/lingkaran2.png";

const Service = () => {
  return (
    <div className="relative py-[150px] font-lexend">
      <img src={lingkaran2} alt="" className="absolute bottom-0 right-0" />
      <div className="container ">
        <div className="flex justify-center items-center flex-col md:flex-row">
          {/* kiri */}
          <div className="w-1/2">
            <div className="border-b-2 border-[#E3CF5F] w-[77px] "></div>
            <h2 className=" text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#007869] mt-4">
              {" "}
              Our Services
            </h2>
            <p className="text-[14px] lg:text-[16px] text-[#434343] mt-4">
              {" "}
              We will always give the best professional services to our
              customers
            </p>
          </div>

          {/* kanan */}
          <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-0">
            <div className="    flex justify-between  items-start flex-col p-5 gap-5 border border-yellow-100 shadow-md">
              <img
                src={service1}
                alt=""
                className="w-[24px] md:w-[28px] md:w-[32px]"
              />
              <p className="text-[#53AB78] font-bold text-sm md:text-base lg:text-lg">
                Recruitment & Selection
              </p>
            </div>
            <div className="  flex justify-between items-start flex-col p-5 gap-5 border border-yellow-100  shadow-md">
              <img
                src={service2}
                alt=""
                className="w-[24px] md:w-[28px] md:w-[32px]"
              />
              <p className="text-[#53AB78] font-bold text-sm md:text-base lg:text-lg">
                Working Placement
              </p>
            </div>
            <div className="  flex justify-between items-start flex-col p-5 gap-5 border border-yellow-100  shadow-md">
              <img
                src={service3}
                alt=""
                className="w-[24px] md:w-[28px] md:w-[32px]"
              />
              <p className="text-[#53AB78] font-bold text-sm md:text-base lg:text-lg">
                {" "}
                Monitoring & Evaluation Employees Perfomance
              </p>
            </div>
            <div className="  flex justify-between  items-start flex-col p-5 gap-5 border border-yellow-100  shadow-md">
              <img
                src={service4}
                alt=""
                className="w-[24px] md:w-[28px] md:w-[32px]"
              />
              <p className="text-[#53AB78] font-bold text-sm md:text-base lg:text-lg">
                {" "}
                Compensation & Benefit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
