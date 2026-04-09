import { useEffect, useState } from "react"
import RestCard from "./RestCard"
import Shimmer from "./Shimmer"
 
export default function Restaurant() {
 
  const [restData, setRestData] = useState([])
  const [error, setError] = useState(null)
 
  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true"

        const response = await fetch(proxyServer + swiggyAPI)

        if (!response.ok) throw new Error("Failed to fetch restaurants")

        const data = await response.json()

        setRestData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
      } catch (err) {
        setError("Could not load restaurants. Please try again.")
      }
    }
    fetchData()
  }, [])
 
  if (error) return <p className="text-center mt-20 text-xl text-red-500">{error}</p>
  if (restData.length === 0) return <Shimmer />
 
  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {restData.map(restInfo => (
        <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
      ))}
    </div>
  )
}