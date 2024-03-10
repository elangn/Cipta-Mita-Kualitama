import React from "react";
import map from "../assets/map.png";
import loc from "../assets/loc.png";

const Location = () => {
  return (
    <div className="home p-5">
      <div className="container py-[100px]  font-lexend">
        <div className="flex flex-col md:flex-row gap-5">
          {/* kiri  */}
          <div className="w-full md:w-1/2">
            <img src={map} alt="" />
          </div>

          {/* kanan */}

          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="border-b-2 border-[#E3CF5F] w-[77px] "></div>
            <h2 className="font-bold text-[22px] md:text-[26px] lg:text-[30px] text-[#007869] mt-5">
              {" "}
              Our Services come to all cities all around Indonesia{" "}
            </h2>

            <div className="grid grid-cols-2 mt-10 gap-1">
              <div className="flex   items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Bali</span>
              </div>
              <div className="flex   items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Palembang</span>
              </div>
              <div className="flex   items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Jogjakarta</span>
              </div>
              <div className="flex   items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Cirebon</span>
              </div>
              <div className="flex   items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Bandung</span>
              </div>
              <div className="flex   items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Semarang</span>
              </div>
              <div className="flex   items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Medan</span>
              </div>
              <div className="flex  items-center">
                <img
                  src={loc}
                  alt=""
                  className="w-[10px] h-[14px] md:w-[13px] md:h-[17px] mr-2"
                />
                <span className="text-sm md:text-base">Surabaya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
