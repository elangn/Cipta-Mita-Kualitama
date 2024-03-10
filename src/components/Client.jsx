import React from "react";
import xl from "../assets/xl.png";
import nh from "../assets/nh.png";
import mayapada from "../assets/mayapada.png";
import sera from "../assets/sera.png";
import meikarta from "../assets/mkrt-new.png";
import oke from "../assets/oke.png";
import smartfren from "../assets/smartfren.png";
import yokogawa from "../assets/yokogawa.png";
import acer from "../assets/acer.png";
import balitower from "../assets/balitower.png";
import tri from "../assets/tri.png";
import bgrli from "../assets/BGRLI.png";
import mnctv from "../assets/mnctv.png";
import indovision from "../assets/Indovision.png";
import jdid from "../assets/jdid.png";

const Client = () => {
  return (
    <div className="container">
      <div className="  py-[100px]">
        <div className="text-center border-b-2 w-[77px] mx-auto border-[#FFAE3D]">
          {" "}
        </div>
        <h2 className=" mt-3 font-lexend text-[28px] md:text-[32px] lg:text-[36px] text-[#007869] font-bold text-center">
          Our Client
        </h2>

        <div className="w-2/3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5   mt-16 mx-auto gap-5">
          <div className=" mx-auto">
            <img src={xl} alt="" />
          </div>
          <div>
            <img src={nh} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={mayapada} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={sera} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={meikarta} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={oke} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={smartfren} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={yokogawa} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={acer} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={balitower} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={tri} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={bgrli} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={mnctv} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={indovision} alt="" />
          </div>
          <div className=" mx-auto">
            <img src={jdid} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
