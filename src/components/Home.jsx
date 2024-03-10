import React from "react";
import gambar1 from "../assets/Group8.png";
import wa from "../assets/WhatsappLogo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container pb-[50px] py-[150px]  ">
        <div className="flex items-center flex-col md:flex-row">
          {/* kiri */}
          <div className="w-full   ">
            {" "}
            <h1 className="font-lexend font-bold text-[20px]  md:text-[24px] lg:text-[28px] animasi">
              We give <span className="text-[#007869]"> SOLUTIONS </span>for
              increasing the{" "}
              <span className="text-[#007869]">efficiency & producivity </span>{" "}
              of your employees.
            </h1>
            <h2 className="font-miniver text-[18px] md:text-[22px] lg:text-[24px] mt-2">
              {" "}
              your trusted Human resource provider
            </h2>
            <a
              href=""
              className="font-lexend text-[18px] flex text-white w-[200px] h-[40px] md:w-[215px] md:h-[45px] lg:w-[240px] lg:h-[50px] bg-[#496F41] rounded-md justify-center items-center gap-[16px] mt-10
             hover:bg-yellow-600 transition duration-300 "
            >
              <img
                src={wa}
                alt=""
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]  lg:w-[24px] lg:h-[24px] "
              />
              <span className="font-lexend text-[14px] md:lg:text-[16px] lg:text-[18px]">
                {" "}
                Consultation now
              </span>
            </a>
          </div>

          {/* kanan  */}
          <div className=" w-full mt-16 md:mt-5">
            <img
              src={gambar1}
              alt=""
              className="w-[300px] h-[300px] md:w-[375px] md:h-[375px] lg:w-[450px] lg:h-[450px] mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
