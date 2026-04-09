import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import MenuCard from "./MenuCard"
 
export default function RestaurantMenu() {
 
  const { id } = useParams()
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const [restData, setRestData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`

        const response = await fetch(proxyServer + swiggyAPI)

        if (!response.ok) throw new Error("Failed to fetch menu")

        const data = await response.json()
        const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards

        const filterData = tempData.filter(items => 'title' in items?.card?.card)

        setRestData(filterData)
      } catch (err) {
        setError("Could not load menu. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])
 
  if (loading) return <p className="text-center mt-20 text-xl text-gray-400">Loading menu...</p>
  if (error) return <p className="text-center mt-20 text-xl text-red-500">{error}</p>
 
  return (
    <div>
      {/* Search bar — passes already-fetched data via router state */}
      <div className="w-[80%] mx-auto mt-10 mb-6">
        <button className="w-full text-center py-4 rounded-4xl bg-gray-200 text-xl hover:bg-gray-300 transition" onClick={() => navigate(`/city/delhi/${id}/search`, { state: { menuData: restData } })}
        >
          🔍 Search for Dishes
        </button>
      </div>
 
      {/* Veg / Non-veg filter */}
      <div className="w-[80%] mx-auto mb-8 flex gap-3">
        <button className={`text-xl py-2 px-8 border rounded-2xl transition ${selected === "veg" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          onClick={() => setSelected(selected === 'veg' ? null : 'veg')}
        >
          🟢 Veg
        </button>

        <button className={`text-xl py-2 px-8 border rounded-2xl transition ${selected === "nonveg" ? "bg-red-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSelected(selected === 'nonveg' ? null : 'nonveg')}
        >
          🔴 Non-veg
        </button>
      </div>
 
      {/* Menu sections */}
      <div className="w-[80%] mx-auto">{restData.map(menuItems => ( 
        <MenuCard key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodSelected={selected}
        />
        ))}
      </div>
    </div>
  )
}