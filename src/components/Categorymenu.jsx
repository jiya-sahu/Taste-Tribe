import {useEffect, useState} from 'react'
import FoodData from '../data/fooddata';
import { useDispatch  , useSelector} from 'react-redux';
import { setCategory } from '../redux/slices/Categoryslice';


const Categorymenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map(food => food.category))];
    setCategories(uniqueCategories);
  }

  useEffect(()=>{
    listUniqueCategories();
    console.log(categories);
    
  },[])
  return (
    <div className='ml-6 '>
      <h3 className="text-xl font-semibold text-gray-500">Find The best Food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button 
        onClick={() => dispatch(setCategory("All"))}
        className={`${selectedCategory === "All" ? 'bg-green-500 text-white' : ''} px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white`}>
            All
        </button>
       {categories.map((item, index)=>(
         <button key={index} onClick={() => dispatch(setCategory(item))} className={`${selectedCategory === item ? 'bg-green-500 text-white' : ''} px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white`}>
           {item}
         </button>
       ))}
      </div>
    </div>
  )
}

export default Categorymenu
