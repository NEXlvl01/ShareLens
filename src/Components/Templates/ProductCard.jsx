import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { setSpecificProd } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        setSpecificProd(product);
        navigate("/product");
        document.documentElement.scrollTop = 0; 
      }}
      className="w-[400px] flex flex-col bg-white justify-center items-center min-h-[430px] py-6 px-8 rounded-3xl gap-12 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
    >
      <div>
        <img src={product.image} alt="" className="h-[200px] w-[250px]" />
      </div>

      <div className="text-center flex flex-col gap-5">
        <p className="text-[#c9313b] font-semibold text-xl">{product.title}</p>
        <p className="text-[#0C1D37] font-bold">₹ {product.price} Per Day</p>
      </div>
    </div>
  );
}
