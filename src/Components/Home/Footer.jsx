import React, { useState } from "react";
import toast from "react-hot-toast";
import img from "../../Images/membership photo.jpg";
import logo from "../../Logos/Sharelens main.png";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [memberStat, setMemberStat] = useState(true);
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    setMemberStat(false);

    toast.success("Membership Joined Successfully");
  }

  function clickHandler() {
    document.documentElement.scrollTop = 0;
    navigate("/");
  }

  return (
    <div className="bg-[#fdf8f4] flex flex-col justify-center items-center pt-20">
      <div id = "footerFirstMainDiv" className="w-[70%] bg-[#0c1d37] rounded-3xl flex p-20">
        <div id = "footerFirstSubDiv" className="w-[50%] flex flex-col gap-10 justify-center">
          <h1 id = "footerSubText1" className="text-white text-5xl font-semibold w-[80%]">
            Stay up to date with Sharelens.
          </h1>
          <p id = "footerSubText2" className="text-[#989fa7] w-[80%] text-xl">
            Member only deals, news and updates direct from our team, to your
            inbox.
          </p>
          {memberStat ? (
            <form action="" className="flex gap-6 flex-wrap" onSubmit={submitHandler}>
              <input
                type="email"
                className="bg-[#25344b] rounded-3xl h-[50px] w-[250px] p-5 text-white"
                placeholder="Your Email"
                required
              />
              <button className="bg-white px-8 py-3 rounded-3xl font-semibold text-[#0C1D37] hover:bg-[#c9313b]   hover:text-white transition-all duration-200">
                Join!
              </button>
            </form>
          ) : (
            <div className="bg-[#0d343d] text-[#11a05c] p-6 w-fit rounded-3xl flex justify-center items-center">
              <p className="w-[80%] text-center text-xl">
                Thank you! Your submission has been received!
              </p>
            </div>
          )}
        </div>
        <div id = "footerFirstSubDiv" className="w-[50%] rounded-3xl">
          <img src={img} alt="" className="rounded-3xl" />
        </div>
      </div>

      <div id = "footerMainDiv2" className="w-[80%] py-24 flex justify-around">
        <div id = "footerLogoDiv" className="w-[20%] text-[#0C1D37] flex flex-col gap-10">
          <img
            src={logo}
            alt=""
            className="w-[150px] h-[30px] cursor-pointer"
            onClick={clickHandler}
          />
          <p id = "footerQuote" >
            Rent lenses and cameras from ShareLens - Your one-stop shop for
            photography gear.
          </p>
          <div className="flex gap-3 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-[#ff4136] transition-all duration-200" />
            <FaPinterestP className="cursor-pointer hover:text-[#ff4136] transition-all duration-200" />
            <FaFacebook className="cursor-pointer hover:text-[#ff4136] transition-all duration-200" />
            <FaTwitter className="cursor-pointer hover:text-[#ff4136] transition-all duration-200" />
          </div>
        </div>

        <div id = "footerOptDiv" className="w-[70%] flex justify-around">
          <div id = "footerOptions" className="w-[20%] text-center flex flex-col gap-6">
            <h1 className="text-4xl font-semibold text-center py-4">Hire</h1>
            <div className="flex flex-col gap-1">
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Hire Camera
              </p>
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Hire Lens
              </p>
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Hire Accessories
              </p>
            </div>
          </div>
          <div id = "footerOptions" className="w-[20%] text-center flex flex-col gap-6">
            <h1 className="text-4xl font-semibold text-center py-4">About</h1>
            <div className="flex flex-col gap-1">
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Our Story
              </p>
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Our Service
              </p>
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Our Value
              </p>
            </div>
          </div>
          <div id = "footerOptions" className="w-[20%] text-center flex flex-col gap-6">
            <h1 className="text-4xl font-semibold text-center py-4">
              Need Help?
            </h1>
            <div className="flex flex-col gap-1">
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                FAQs
              </p>
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Membership
              </p>
              <p className="cursor-pointer hover:text-[#ff4136] transition-all duration-200">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
