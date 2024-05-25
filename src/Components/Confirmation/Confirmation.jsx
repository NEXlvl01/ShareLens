import React, { useContext } from 'react';
import { Checkmark } from 'react-checkmark';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import "./Confirmation.css";

export default function Confirmation() {

    const {specificProd} = useContext(AppContext);
    const navigate = useNavigate();

  return (
    <div className='h-[700px] bg-[#fdf8f4]'>
      <div className='h-full w-full flex justify-center items-center'>
        <div id = "confirmMainDiv" className='w-[50%] h-[400px] bg-white rounded-3xl shadow-xl flex justify-center gap-10'>
            <div id  ="confirmSubDiv" className='w-[40%] flex items-center flex-col justify-center gap-8'>
                <Checkmark size = '90px'/>
                <p className='text-5xl text-center'>Item Reserved</p>
                <button className="w-[80%] bg-[#c9313a] text-white font-semibold py-3 rounded-3xl hover:bg-[#de5b63] transition-all duration-200" onClick={() => {navigate("/");}}>
                    Return Home
                </button>
            </div>

            <div id  ="confirmSubDiv" className='flex justify-center items-center w-[40%] flex-col gap-9'>
                <img src={specificProd.image} alt="" className="w-[200px] h-[180px]"/>
                <p className='text-2xl text-[#c9313a] text-center'>{specificProd.title}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
