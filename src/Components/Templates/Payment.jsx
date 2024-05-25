import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import './Payment.css';
import { useNavigate } from "react-router-dom";

export default function Payment() {

  const navigate = useNavigate();
  const { specificProd, rentalDetails } = useContext(AppContext);

  const pickupDateObj = new Date(rentalDetails.pickupDate);
  const dropDateObj = new Date(rentalDetails.dropDate);

  const pickupFormatted = pickupDateObj.toLocaleString("default", {
    month: "short",
    day: "numeric",
  });
  const dropFormatted = dropDateObj.toLocaleString("default", {
    month: "short",
    day: "numeric",
  });

  const timeDifferenceMs = dropDateObj - pickupDateObj;
  const days = Math.floor(timeDifferenceMs / (24 * 60 * 60 * 1000)) + 1;
  const price = days * specificProd.price;

  function submitHandler(event) {
    event.preventDefault();
    navigate("/confirmation");
  }

  return (
    <div className="bg-[#fdf8f4] w-full flex justify-center text-[#0C1D37] py-14">
      <div id = "paymentWrapper" className="w-[70%] flex flex-col gap-24">
        <h1 className="text-4xl font-semibold text-[#0C1D37] text-center">
          Confirmation And Payment
        </h1>

        <div id = "paymentMainDiv" className="w-full px-3 flex justify-center gap-24">
          <div id = "paymentSubDivs" className="flex flex-col gap-10 w-[35%]">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold text-[#c9313a]">Rental Date</h1>
              <div className="text-xl font-semibold">
                <span>{pickupFormatted}</span> - <span>{dropFormatted}</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-semibold text-[#c9313a]">Payment</h1>
              <form action="" className="flex flex-col gap-6" onSubmit={submitHandler}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="cardno">Card Number</label>
                  <input
                    type="text"
                    id="cardno"
                    className="w-full px-3 h-[50px] rounded-lg"
                    placeholder="Enter Card Number"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="cardholder">Card Holder</label>
                  <input
                    type="text"
                    id="cardholder"
                    className="w-full px-3 h-[50px] rounded-lg"
                    placeholder="Enter Card Holder"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-[50%] flex flex-col gap-1">
                    <label htmlFor="expiry">Expiration date</label>
                    <input
                      type="date"
                      className="w-full px-3 h-[50px] rounded-lg"
                      required
                    />
                  </div>
                  <div className="w-[50%] flex flex-col gap-1">
                    <label htmlFor="expiry">CVV</label>
                    <input
                      type="text"
                      className="w-full px-3 h-[50px] rounded-lg"
                      placeholder="Enter CVV"
                      required
                    />
                  </div>
                </div>

                <button className="w-full bg-[#c9313a] text-white font-semibold py-3 rounded-3xl hover:bg-[#de5b63] transition-all duration-200">
                  Confirm And Pay
                </button>
              </form>
            </div>
          </div>

          <div id = "paymentSubDivs" className="w-[33%]">
            <div className="flex flex-col gap-9">
              <div className="flex gap-6 items-center">
                <img
                  src={specificProd.image}
                  alt=""
                  className="w-[200px] h-[180px]"
                />
                <div>
                  <h1 className="text-xl font-semibold text-[#c9313a] text-center">
                    {specificProd.title}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-[#c9313a]">Price</h1>
                <div className="flex justify-between">
                  <span>
                    {specificProd.price} x {days}
                  </span>
                  <span>{price}</span>
                </div>
                <div className="flex justify-between text-xl font-semibold">
                  <h1 className="font-semibold">Total</h1>
                  <span>{price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
