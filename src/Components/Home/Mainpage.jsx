import React from "react";
import vid from "../../Videos/mainpage video.mp4";
import Workwith from "./Workwith";
import "./Mainpage.css";
import CameraHome from "./CameraHome";
import { useNavigate } from "react-router-dom";


export default function Mainpage() {

  const cameraHead = "Camera Hire";
  const cameraText = "With our extensive range of professional-grade cameras, including DSLRs, mirrorless cameras, video cameras, and cinema cameras, you can have access to the latest and greatest technology, without the hefty price tag. Each camera in our collection is meticulously maintained and regularly updated, giving you the peace of mind to focus on capturing those unforgettable moments.";

  const lensHead = "Lens Hire";
  const lensText = "Our extensive range of lenses features everything from wide-angle to telephoto, prime to zoom, and everything in between, all meticulously maintained and regularly serviced to ensure optimal performance. Whether you're a professional photographer or just starting out, our lenses will help you take your craft to the next level.";

  const navigate = useNavigate();

  return (
    <div>
      <div className="relative w-full h-[900px]">
        <div className="h-full absolute brightness-50 w-full">
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src={vid} type="video/mp4" />
          </video>
        </div>



        <div id = "mainPageTextDiv" className="z-30 absolute bg-transparent w-full flex flex-col justify-center items-center h-full gap-12">
          <h1 id = "mainPageHead" className="text-7xl text-[#fdf8f4] font-semibold text-center">
            Camera Hire Made <span className="text-[#c9313b]">Easy</span>
          </h1>
          <div id = "mainPageText" className="text-2xl text-[#b9b9b8] text-center flex flex-col gap-4">
            <p>
              Welcome to ShareLens! Rent from our extensive collection of lenses
              and cameras.
            </p>
            <p>
              With online verification, live availability, nationwide shipping
              across India, and 24/7 online booking.
            </p>
          </div>

          <div>
            <button className="text-[#FAF9F6] bg-[#c9313b] py-3 px-10 rounded-full hover:bg-[#0C1D37] transition-all duration-200" onClick={() => {navigate("/cameras")}}>Rental Cameras</button>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF9F6]">
        <Workwith/>
      </div>

      <div>
        <CameraHome head = {cameraHead} text = {cameraText} type = {true}/>
      </div>

      <div>
        <CameraHome head = {lensHead} text = {lensText} type={false}/>
      </div>

    </div>
  );
}
