import { GroceryGridCards } from "../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption(){

  return(

    <div className="mt-20 w-[80%] container mx-auto">
      <h1 className="font-bold text-2xl">Shop groceries on Instamart</h1>
      <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-10 gap-3">
            
        {
          GroceryGridCards.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
        }
      </div>
    </div>
  )
}