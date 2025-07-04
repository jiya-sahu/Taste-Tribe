import FoodCard from './FoodCard'
import FoodData from '../data/fooddata.js'
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';
const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name} `);
  const selectedCategory = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.query);
  console.log(search);
  
  return (
    <>
       <Toaster position="top-center" reverseOrder={false} />
      <div className='flex flex-row  flex-wrap sm:[flex-col] gap-10 justify-center lg:justify-start mx-6 my-10 '>
        {
          FoodData.filter((food) => {
            if(selectedCategory === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            }else{
              return food.category === selectedCategory && food.name.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              desc={food.desc}
              img={food.img}
              price={food.price}
              rating={food.rating}
              handleToast={handleToast}
            />
          ))}
    </div>
    </>
  )
}

export default FoodItems
