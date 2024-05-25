import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "./ProductDescription.css";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export default function ProductDescription() {
  const { specificProd, loginStatus,setRentalDetails } = useContext(AppContext);

  const [formData, setFormData] = useState({ pickupDate: "", returnDate: "" });

  const [loader, setLoader] = useState(false);

  const [availStat, setAvailStat] = useState(false);

  const [availLoader, setAvailLoader] = useState(false);

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    if (loginStatus === false) {
      toast.error("Login Required For Reservation");
      return ;
    }

    if(availStat === false) {
      toast.error("First Check Availabilty Of Product");
      return ;
    }

    navigate("/payment");
    setRentalDetails(
      {
        pickupDate: formData.pickupDate,
        dropDate: formData.returnDate
      }
    )
  }

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [availDiv,setAvailDiv] = useState(false);

  function availHandler(event) {
    event.preventDefault();
    setAvailStat(true);

    setAvailLoader(true);

    setTimeout(()=> {
      setAvailLoader(false);

      if(specificProd.availability === true) {
        setAvailDiv(true);
      }
      else {
        setAvailDiv(false);
      }
    },2000);


  }

  return (
    <div className="w-full bg-[#fdf8f4] flex justify-center py-16">
      <div id="productDescMainDiv" className="w-[60%] text-[#0C1D37]">
        <div id="productDescSub1" className="w-full flex">
          <div id="productDescItems" className="flex flex-col gap-16 w-[50%]">
            <p id="productDescTitle" className="">
              {specificProd.title}
            </p>
            <form className="flex flex-col gap-10" onSubmit={submitHandler}>
              <h1 id="productDescTitle" className="text-4xl font-semibold">
                {specificProd.title}
              </h1>
              <div className="flex gap-4 bg-[#fcede2] p-8 rounded-2xl">
                <p className="font-semibold text-center">
                  Select Rental Period
                </p>
                <div
                  id="rentalDateDiv"
                  className="flex gap-3 justify-center items-center"
                >
                  <input
                    type="date"
                    className="px-2 cursor-pointer rounded-lg w-[45%]"
                    onChange={changeHandler}
                    required
                    name="pickupDate"
                    value={formData.pickupDate}
                  />{" "}
                  <span>To</span>{" "}
                  <input
                    type="date"
                    className="px-2 cursor-pointer rounded-lg w-[45%]"
                    onChange={changeHandler}
                    required
                    name="returnDate"
                    value={formData.returnDate}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center">
                {availStat ? (
                  availLoader ? (
                    <div>
                      <BarLoader color="#c9313a" width={80} />
                    </div>
                  ) : (
                    <div id = "availStatDiv" className="bg-green-600 text-white rounded-lg px-5 py-2">
                      {availDiv ? "Available" : "Unavailable"}
                    </div>
                  )
                ) : (
                  <button onClick = {availHandler} className="text-center hover:underline transition-all duration-200 hover:text-[#c9313a]">
                    Check Availability
                  </button>
                )}
              </div>

              <div>
                <p className="text-center text-xl font-semibold">
                  ₹ {specificProd.price} Per Day{" "}
                </p>
              </div>

              <div className="w-full">
                {loader ? (
                  <p>Please Wait</p>
                ) : (
                  <button className="w-full bg-[#c9313a] text-white rounded-2xl py-3 hover:bg-[#de5b63] transition-all duration-200">
                    Reserve
                  </button>
                )}
              </div>
            </form>
          </div>
          <div
            id="productDescItems"
            className="w-[50%] flex justify-center items-center"
          >
            <img
              src={specificProd.image}
              alt=""
              className="h-[300px] w-[350px]"
            />
          </div>
        </div>

        <div className="pt-16">
          <h1 className="text-center text-3xl font-semibold py-5">
            Product Details
          </h1>
          <div className="text-center">{specificProd.desc}</div>
        </div>
      </div>
    </div>
  );
}
