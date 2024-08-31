import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
const Itemcard = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
          <MdDelete  className="absolute right-7 text-gray-600 cursor-pointer" />
      <img src="https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png"
        alt="Margherita Pizza" className="w-[50px] h-[50px] "/>
        <div className='leading-5'>
            <h2 className="font-bold text-gray-800">Margherita Pizza</h2>
            <div className="flex justify-between ">
                <span className="text-green-500 font-bold">₹180</span>
               
            <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus  className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>1</span>
            <AiOutlinePlus  className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"/>
            </div>
            </div>
        </div>
    </div>
     
   
  )
}

export default Itemcard
