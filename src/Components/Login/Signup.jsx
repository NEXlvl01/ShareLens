import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const [signupData,setSignupData] = useState({name: "",email: "",pass1:"",pass2:""});
    const navigate = useNavigate();

    function changeHandler(event) {
        setSignupData((prevData) => {
            return {
                ...prevData,
                [event.target.name] : event.target.value,
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();

        if(signupData.pass1 !== signupData.pass2) {
            toast.error("Passwords Does Not Match");
            return;
        }

        localStorage.setItem("Name",signupData.name);
        localStorage.setItem("Email",signupData.email);
        localStorage.setItem("Pass",signupData.pass1);
        toast.success("Account Created Successfully");
        navigate("/login");
    }

    function clickHandler(event) {
        event.preventDefault();
        navigate("/login");
    }

  return (
    <div className="w-full py-6 bg-[#fdf8f4] flex justify-center">
      <div id = "loginMainDiv" className="w-[22%] flex flex-col gap-20 text-[#0C1D37]">
        <h1 className="text-center text-5xl font-bold">Sign Up</h1>
        <form className="flex flex-col gap-8" onSubmit={submitHandler}>
          <div className="flex flex-col gap-3">
            <button className="flex justify-center w-full items-center border border-[#0C1D37] py-2 rounded-xl relative shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200">
              <FaFacebookSquare className="text-xl text-[#3b5998] absolute left-4" />
              <p className="text-center font-semibold">
                Continue With Facebook
              </p>
            </button>
            <button className="flex justify-center w-full items-center border border-[#0C1D37] py-2 rounded-xl relative shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200">
              <FcGoogle className="text-xl absolute left-4" />
              <p className="text-center font-semibold">Continue With Google</p>
            </button>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-[45%] h-[1px] bg-neutral-400"></div>
            <span>OR</span>
            <div className="w-[45%] h-[1px] bg-neutral-400"></div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="h-[50px] rounded-lg px-5 border border-neutral-400"
                placeholder="Enter Full Name"
                required
                onChange={changeHandler}
                value={signupData.name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="h-[50px] rounded-lg px-5 border border-neutral-400"
                placeholder="Enter Email"
                required
                onChange={changeHandler}
                value={signupData.email}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="pass1">Set Password</label>
              <input
                type="password"
                name="pass1"
                id="pass1"
                className="h-[50px] rounded-lg px-5 border border-neutral-400"
                placeholder="Enter Password"
                required
                onChange={changeHandler}
                value={signupData.pass1}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="pass2">Confirm Password</label>
              <input
                type="password"
                name="pass2"
                id="pass2"
                className="h-[50px] rounded-lg px-5 border border-neutral-400"
                placeholder="Enter Password"
                required
                onChange={changeHandler}
                value={signupData.pass2}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full bg-[#c9313a] text-white font-semibold py-3 rounded-3xl hover:bg-[#de5b63] transition-all duration-200">
              Continue
            </button>
            <div className="flex justify-center gap-1">
              Already Have An Account?{" "}
              <button className="font-bold" onClick={clickHandler}>
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
