import React,{useState} from 'react'
import { IoMdClose} from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const CartItems = useSelector((state)=>state.cart.cart);

  console.log(CartItems);


  return (
    <>
    <div 
     className= 'fixed right-0 top-0 w-[20vw] h-full bg-white mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50'>


      <div className='flex justify-between my-3 mx-3'>
        <span>My Order</span>
        <IoMdClose 
        onClick={()=> setActiveCart(!activeCart)}
        className='border-2 border-gray-600 font-bold rounded-md p-1 text-xl hover:text-red-300 hover:border-red-300 cursor-pointer' />
      </div>
      <Itemcard/>
      <div className='absolute bottom-0 mx-3'>
        <p className='font-semibold text-gray-800'>Items:</p>
        <p className='font-semibold text-gray-800'>Total Amount</p>
        <hr className='w-[90vw] lg:w-[18vw] my-2'/>
        <button 
        className='px-3 py-2 text-white font-bold  rounded-lg w-[90vw] lg:w-[18vw] mb-5 bg-green-500'> Checkout</button>
      </div>

    </div>
    <FaShoppingCart />
    </>
  )
}

export default Cart
