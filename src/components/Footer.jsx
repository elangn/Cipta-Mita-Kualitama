import React from "react";
import logo from "../assets/Logo.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import ig from "../assets/instagram.png";
import yt from "../assets/yt.svg";
import fb from "../assets/fb.svg";
import email from "../assets/gmail.png";
import telephone from "../assets/telephone.png";
import insta from "../assets/insta.png";
import placeholder from "../assets/placeholder.png";

const Footer = () => {
  return (
    <div className="container pb-3 ">
      <div className="flex flex-col md:flex-row gap-10 pt-[100px] px-5">
        {/* kiri */}
        <div className="w-full md:w-1/2">
          <img
            src={logo}
            alt=""
            className="w-[110px] h-[45px] md:w-[130px] md:h-[62px]"
          />

          <h4 className="font-miniver text-lg md:text-[22px] lg:text-[24px] text-[#496F41] mt-12">
            {" "}
            “Your Trusted Human Resources Provider”{" "}
          </h4>
        </div>

        {/* kanan */}
        <div className="w-full md:w-1/2 font-lexend mt-10">
          <p className="font-bold text-base lg:text-[18px] text-[#007869]">
            {" "}
            Visit Us :{" "}
          </p>

          {/* detail*/}
          <div className="flex justify-start items-center mt-10 ">
            <img
              src={placeholder}
              alt=""
              className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px] mr-2"
            />
            <p className="text-sm md:text-base ">
              {" "}
              Gedung Plaza Kaha, Jl.K.H Abdullah Syafi'ie No. 20A Lt3 Suite
              301-302 Tebet, Jakarta Selatan 12480
            </p>
          </div>
          <div className="flex justify-start items-center my-2">
            <img
              src={telephone}
              alt=""
              className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px] mr-2"
            />
            <p className="text-sm md:text-base "> +62 818-1819-9979 </p>
          </div>
          <div className="flex justify-start items-center my-2">
            <img
              src={email}
              alt=""
              className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px] mr-2"
            />
            <p className="text-sm md:text-base ">
              {" "}
              recruitment@ciptamitra.co.id
            </p>
          </div>
          <div className="flex justify-start items-center my-2">
            <img
              src={insta}
              alt=""
              className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px] mr-2"
            />
            <p className="text-sm md:text-base "> @karircmk</p>
          </div>
          <div className="flex justify-start items-center my-2">
            <img
              src={fb}
              alt=""
              className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px] mr-2 text-blue-500 "
            />
            <p className="text-sm md:text-base "> facebook.com/ciptaners</p>
          </div>
          <div className="flex justify-start items-center my-2">
            <img
              src={yt}
              alt=""
              className="w-[18px] h-[18px] lg:w-[21px] lg:h-[21px] mr-2 text-blue-500 "
            />
            <p className="text-sm md:text-base ">
              {" "}
              www.youtube.com/@ciptamitrakualitama
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-[100px]">
        <p className="font-lexend text-xs md:text-sm text-[#496F41]">
          {" "}
          Copyright CMK © 2023 PT. Cipta Mitra Kualitama{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
