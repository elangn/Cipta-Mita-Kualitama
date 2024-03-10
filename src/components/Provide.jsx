import React from "react";
import bg4 from "../assets/bg4.png";
import bg42 from "../assets/bg4-2.png";

const Provide = () => {
  return (
    <div className="provide ">
      <div className="provide2">
        <div className=" coba container w-full   py-[100px] ">
          <div className="flex justify-center items-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-center">
              <div className="border-b-2 border-[#E3CF5F] w-[77px] mx-auto"></div>
              <h2 className="font-bold text-[20px] md:text-[22px] lg:text-[24px] font-lexend text-[#FFD95C] w-[271px] mx-auto mt-4">
                {" "}
                We Provide all job title of recruitment & outsourcing such as
              </h2>
            </div>

            <div className="w-1/2 flex text-sm md:text-[14px] text-white font-lexend mt-10 md:mt-0">
              <ul>
                <li> - Sales Promotion</li>
                <li> - Sales</li>
                <li> - Marketing</li>
                <li> - Customer Services</li>
                <li> - Technician</li>
                <li> - Administration</li>
                <li> - Secretary</li>
                <li> - Call Center</li>
                <li> - Inventory</li>
                <li> - Driver</li>
                <li> - Messenger</li>
                <li> - Finance Management</li>
                <li> - Accounting</li>
                <li> - Engineer</li>
                <li> - Othes professional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
