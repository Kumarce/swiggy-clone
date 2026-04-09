import { useSelector } from "react-redux"
import { Link } from "react-router"

export default function RestHeader(){

  const counter = useSelector(state=> state.cartslice.count)

  return(

    <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-3xl rounded-xl flex justify-between items-center">
      <div>
        <p className="text-orange-600 font-bold">Swiggy</p>
      </div>

      <div>
        <Link to='/checkout'>
        <p>Cart {`(${counter})`}</p>
        </Link>
      </div>
    </div>

  )
}