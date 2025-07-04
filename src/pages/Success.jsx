import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },4000)
  },[])
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Order Successful!</h2>
          <p className="text-center">Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
