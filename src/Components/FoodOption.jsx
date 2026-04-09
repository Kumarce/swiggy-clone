import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"


export default function FoodOption(){

  return (
    <div>
      <h1 className="mt-20 w-[80%] container mx-auto text-2xl font-bold">Order our best food options</h1>
      <div className="w-[80%] container mx-auto flex flex-wrap mt-8 gap-4">
        
        {
          imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
        }
      </div>
    </div>
  )
}