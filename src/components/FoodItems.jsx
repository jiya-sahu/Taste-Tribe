import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/fooddata.js'
const FoodItems = () => {
  return (
    <div className='flex flex-row  flex-wrap sm:[flex-col] gap-10 justify-center lg:justify-start mx-6 my-10 '>{
        FoodData.map((food)=>{
          return (<FoodCard 
          key={food.id}
          id={food.id}
          name={food.name}
          desc={food.desc}
          img={food.img}
          category={food.category}
          price={food.price}
          rating={food.rating}/>)
        })
      }
      
    </div>
  )
}

export default FoodItems
