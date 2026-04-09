import { Link } from "react-router"


export default function RestCard({restInfo}){

  return(
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="max-w-70 mb-2 transform transition duration-200 hover:scale-95">
      <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId} alt="" />
      <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl">{restInfo?.info?.name}</div>
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-600"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          ><path d="M12 2l2.9 6.6 7.1.6-5.3 4.6 1.6 7-6.3-3.7-6.3 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
          </svg>
          <span className="text-lg">{restInfo?.info?.avgRating}</span>
          <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
        </div>
        
        <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
      </div>
      
    </div>
    </Link>

  )
}





// https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1


//https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=26723&submitAction=ENTER