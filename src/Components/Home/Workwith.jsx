import React from "react";
import { PiCalendarFill } from "react-icons/pi";
import { FaGlobeAsia } from "react-icons/fa";
import { FaFileWaveform } from "react-icons/fa6";
import { GiCardPickup } from "react-icons/gi";
import logo1 from "../../Logos/netflix.png";
import logo2 from "../../Logos/disney.png";
import logo3  from "../../Logos/mr yum.png";
import logo4 from "../../Logos/broadsheet.png";
import logo5 from "../../Logos/kmart.png";
import logo6 from "../../Logos/wetafx.png";
import "./Workwith.css";

export default function Workwith() {
  return (
    <div className="bg-[#fdf8f4] w-full flex flex-col justify-center items-center py-40 gap-40">
      <div id = "workWithMainDiv1" className="w-[80%] flex justify-evenly">
        <div id = "workSubDiv1" className="w-[22%] flex flex-col justify-center items-center gap-8">
          <div className="bg-white p-7 rounded-2xl w-fit">
            <PiCalendarFill className="text-4xl text-[#cc3e47]" />
          </div>

          <div className="text-center flex flex-col gap-3">
            <h1 className="text-[#0C1D37] font-semibold text-xl">
              One-Day Priced Weekends
            </h1>
            <p className="text-[#0C1D37]">
              When you select Friday as your Pick-Up and Monday as your
              Drop-Off, our booking system will only charge a one day hire rate.
            </p>
          </div>
        </div>
        <div id = "workSubDiv1" className="w-[22%] flex flex-col justify-center items-center gap-8">
          <div className="bg-white p-7 rounded-2xl w-fit">
            <FaGlobeAsia className="text-4xl text-[#cc3e47]" />
          </div>

          <div className="text-center flex flex-col gap-3">
            <h1 className="text-[#0C1D37] font-semibold text-xl">
              Nationwide Delivery
            </h1>
            <p className="text-[#0C1D37]">
              We provide next-day delivery to most major Indian cities, and
              2-day delivery for inter-state regional areas.
            </p>
          </div>
        </div>
        <div id = "workSubDiv1" className="w-[22%] flex flex-col justify-center items-center gap-8">
          <div className="bg-white p-7 rounded-2xl w-fit">
            <FaFileWaveform className="text-4xl text-[#cc3e47]" />
          </div>

          <div className="text-center flex flex-col gap-3">
            <h1 className="text-[#0C1D37] font-semibold text-xl">
              Automatic Insurance
            </h1>
            <p className="text-[#0C1D37]">
              All of our camera equipment is insured when you rent through
              Sharelens for both local and inter-state rentals.
            </p>
          </div>
        </div>
        <div id = "workSubDiv1" className="w-[22%] flex flex-col justify-center items-center gap-8">
          <div className="bg-white p-7 rounded-2xl w-fit">
            <GiCardPickup className="text-4xl text-[#cc3e47]" />
          </div>

          <div className="text-center flex flex-col gap-3">
            <h1 className="text-[#0C1D37] font-semibold text-xl">
              Free Pick-Up & Drop-Off Days
            </h1>
            <p className="text-[#0C1D37]">
              Simply choose the day before your shoot for your Pick-Up, and the
              day after for your Drop-Off, and only pay for one day.
            </p>
          </div>
        </div>
      </div>

      <div id = "workMainDiv2" className="flex items-center justify-center gap-32 w-full">
        <div id = "workSubDiv2" className="w-[25%] flex flex-col gap-6">
          <h1 className="text-[#cc3e47] font-bold text-xl">Our Network</h1>
          <p className="text-[#0C1D37] text-3xl font-bold w-[70%]">There's a reason we have amazing clients.</p>
          <p className="text-[#0C1D37]">
            Our devoted clientele chooses ShareLens for a reason. We stand as a
            pioneering rental house in the industry, relied upon by some of
            India's premier SMEs, production houses, and agencies.
          </p>
        </div>

        <div id = "workSubDiv3" className="flex flex-col gap-24">
          <div id = "logosDiv" className="flex items-center gap-14 flex-wrap">
            <img src={logo1} alt="" className="w-[150px] h-[50px]"/>
            <img src={logo2} alt=""className="w-[150px] h-[100px]"/>
            <img src={logo3} alt="" className="w-[150px] h-[100px]"/>
          </div>
          <div id = "logosDiv" className="flex items-center gap-14 flex-wrap">
            <img src={logo4} alt="" className="w-[150px] h-[60px]"/>
            <img src={logo5} alt=""className="w-[150px] h-[40px]"/>
            <img src={logo6} alt="" className="w-[150px] h-[40px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
