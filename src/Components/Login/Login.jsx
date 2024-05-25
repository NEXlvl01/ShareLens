import React, { useContext, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import toast from "react-hot-toast";
import { AppContext } from "../../Context/AppContext";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", pass: "" });
  const navigate = useNavigate();

  const {setLoginStatus} = useContext(AppContext);

  function changeHandler(event) {
    event.preventDefault();
    setLoginData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    var email = localStorage.getItem("Email");
    var password = localStorage.getItem("Pass");

    if(email !== loginData.email || password !== loginData.pass) {
      toast.error("Invalid User Details");
      return ;
    }

    toast.success("User Logged In");
    navigate("/");
    setLoginStatus(true);
  }

  function clickHandler(event) {
    event.preventDefault();
    navigate("/signup");
  }
  
  return (
    <div className="w-full py-20 bg-[#fdf8f4] flex justify-center">
      <div id = "loginMainDiv" className="w-[22%] flex flex-col gap-20 text-[#0C1D37]">
        <h1 className="text-center text-5xl font-bold">Login</h1>
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

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="h-[50px] rounded-lg px-5 border border-neutral-400"
                placeholder="Enter Email"
                onChange={changeHandler}
                value={loginData.email}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="pass">Email Password</label>
              <input
                id="pass"
                type="password"
                name="pass"
                required
                className="h-[50px] rounded-lg px-5 border border-neutral-400"
                placeholder="Enter Password"
                onChange={changeHandler}
                value={loginData.pass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full bg-[#c9313a] text-white font-semibold py-3 rounded-3xl hover:bg-[#de5b63] transition-all duration-200">
              Continue
            </button>
            <div className="flex justify-center gap-1">
              New User?{" "}
              <button className="font-bold" onClick={clickHandler}>
                Create An Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
