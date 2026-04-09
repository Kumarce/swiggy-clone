import { useState } from "react"
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux"



export default function RestInfo({restData}){
  

  const dispatch = useDispatch()
  const items = useSelector(state=> state.cartslice.items)

  const element = items.find(item=>item.id===restData.id)
  const count = element? element.quantity: 0

  function handleAdditems(){
    dispatch(addItems(restData));
  }

  function handleIncrementItems(){
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems(){
    dispatch(DecrementItems(restData));
  }




  return(
    
    <>
    <div className="flex w-full justify-between mb-2 pb-2">

      <div className="w-[70%]">
        <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
        <p className="text-xl">{"₹"+("defaultPrice" in restData? restData?.defaultPrice/100: restData?.price/100)}</p>
        <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
        <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
        <p>{restData?.description}</p>
      </div>
      <div className="w-[20%] relative h-42">
        <img className="w-60 h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId }alt="" />

        {
          count===0?(<button className="absolute bottom-0 left-18 text-green-600 px-8 py-2 shadow-md border border-white bg-white text-2xl rounded-xl" onClick={()=>handleAdditems()}>ADD</button>):(
            <div className="absolute bottom-0 left-18 rounded-xl flex gap-1.5 text-2xl text-green-600 px-8 py-2 shadow-md border border-white bg-white">
              <button onClick={()=>handleDecrementItems()}>-</button>
              <span>{count}</span>
              <button onClick={()=>handleIncrementItems()}>+</button>
            </div>
          )
        }
        
      </div>

    </div>
    <hr className="mb-6 mt-2"/>
    </>
  )
}