import React,{useState} from 'react'
import { IoMdClose} from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const CartItems = useSelector((state)=>state.cart.cart);
  const totalqty = CartItems.reduce((totalqty,item)=>totalqty +item.qty,0)
  const totalprice = CartItems.reduce((totalprice,item)=>totalprice+item.qty*item.price,0)
  return (
    <>
    <div 
     className= {`fixed right-0 top-0 w-[20vw] h-full bg-white mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>


      <div className='flex justify-between my-3 mx-3'>
        <span>My Order</span>
        <IoMdClose 
        onClick={()=> setActiveCart(!activeCart)}
        className='border-2 border-gray-600 font-bold rounded-md p-1 text-xl hover:text-red-300 hover:border-red-300 cursor-pointer' />
      </div>
      {CartItems.length > 0 ? (
          CartItems.map((food) => {
            return (
              <Itemcard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}
      <div className='absolute bottom-0 mx-3'>
        <p className='font-semibold text-gray-800'>Items: {totalqty}</p>
        <p className='font-semibold text-gray-800'>Totalprice : {totalprice}</p>
        <hr className='w-[90vw] lg:w-[18vw] my-2'/>
        <button 
        className='px-3 py-2 text-white font-bold  rounded-lg w-[90vw] lg:w-[18vw] mb-5 bg-green-500'> Checkout</button>
      </div>

    </div>
    <FaShoppingCart className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalqty>0 &&  "animate-bounce delay-500 transition-all"  }`} onClick={() => setActiveCart(!activeCart)}/>

    </>
  )
}

export default Cart
