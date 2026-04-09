import { useSelector } from "react-redux"
import { Link } from "react-router"
 
export default function Checkout() {
 
  const items = useSelector(state => state.cartslice.items)
 
  const totalPrice = items.reduce((total, value) => {
    const price = "defaultPrice" in value ? value.defaultPrice / 100 : value.price / 100
    return total + price
  }, 0)
 
  if (items.length === 0) {
    return (
      <div className="w-[80%] mt-20 mx-auto text-center py-20">
        <p className="text-3xl font-bold text-gray-400">Your cart is empty</p>
        <p className="text-gray-400 mt-2 text-xl">Add items from a restaurant to get started</p>
        <Link to="/restaurant">
          <button className="mt-8 bg-orange-500 text-white text-xl px-10 py-3 rounded-2xl">
            Browse Restaurants
          </button>
        </Link>
      </div>
    )
  }
 
  return (
    <div className="w-[80%] mt-20 mx-auto bg-gray-100 rounded-2xl p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
 
      <div className="divide-y divide-gray-300">
        {items.map(value => (
          <div key={value.id} className="py-3 grid grid-cols-3 items-center">
            <div className="text-xl font-medium">{value.name}</div>
            <div className="text-xl text-center">x{value.quantity}</div>
            <div className="text-xl text-right">
              {"₹" + ("defaultPrice" in value ? value.defaultPrice / 100 : value.price / 100)}
            </div>
          </div>
        ))}
      </div>
 
      <div className="flex justify-between mt-6 pt-4 border-t border-gray-300 text-2xl font-bold">
        <span>Total</span>
        <span>{"₹" + totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}