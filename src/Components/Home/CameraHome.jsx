import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./CameraHome.css";
import { useNavigate } from "react-router-dom";

export default function CameraHome({ head, text, type }) {
  const { cameras, lenses, setSpecificProd } = useContext(AppContext);

  const firstFiveCameras = type ? cameras.slice(0, 5) : lenses.slice(0, 5);

  const navigate = useNavigate();

  function clickHandler() {
    if(type) {
      navigate("/cameras");
      document.documentElement.scrollTop = 0;
    }
    else {
      navigate("/lenses");
      document.documentElement.scrollTop = 0;
    }
  }

  return (
    <div className="py-24 px-10 bg-[#fdf8f4] flex flex-col gap-10">
      <div id="cameraHomeMainDiv1" className="flex flex-col gap-12 px-28">
        <h1 className="text-5xl font-bold text-[#0C1D37]">{head}</h1>
        <p className="text-xl text-[rgb(59,69,85)]">{text}</p>
        <button className="w-fit cursor-pointer" onClick={clickHandler}>
          <p className="text-[#c9313b] font-semibold">Explore All</p>
          <div className="w-full h-[2px] bg-[#0C1D37] transition-all duration-200"></div>
        </button>
      </div>

      <div className="overflow-x-scroll px-14 py-10 w-full">
        <div className="w-[120%] flex gap-10">
          {firstFiveCameras.map((camera) => (
            <div
              onClick={() => {
                setSpecificProd(camera);
                navigate("/product");
                document.documentElement.scrollTop = 0; 
              }}
              className="rounded-2xl flex flex-col justify-center items-center gap-14 py-10 bg-[#ffffff] shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-200 min-w-[420px]"
            >
              <div>
                <img
                  src={camera.image}
                  alt=""
                  className="w-[200px] h-[200px]"
                />
              </div>
              <div className="flex flex-col gap-7 justify-center items-center">
                <div className="text-xl text-[#c9313b] text-center font-semibold px-4">
                  {camera.title}
                </div>
                <div className="font-bold text-[#0C1D37]">
                  ₹ {camera.price} Per Day
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
