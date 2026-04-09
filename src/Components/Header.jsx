// first div: swiggy ka logo
import { Link } from "react-router"

export default function Header(){

  return(
    <header className="bg-[#ff5200] font-serif">
      <div className="container mx-auto px-30 flex justify-between py-8">
        <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />

        <div className=" text-white text-base font-bold flex gap-15 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a target="_blank" href="https://partner.swiggy.com/food/login">Partner with us</a>
          <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get the App</a>
          <a className="border border-black bg-black py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
        </div>
      </div>

      <div className="pt-16 pb-8 relative">
        <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
        <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
          Order food. Discover best restaurants. Swiggy it!
        </div>
        <div className="max-w-[50%] container mx-auto flex gap-5 mt-10">
          <input className="bg-white w-[40%] text-xl px-2 py-4 rounded-2xl" placeholder="Enter your delivery location" type="text" />
          <input className="bg-white w-[55%] text-xl px-2 py-4 rounded-2xl" placeholder="Search for restaurant, item or more" type="text" />
        </div>
      </div>

      <div className="max-w-[80%] container mx-auto flex">
        <Link to="/restaurant">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
        </Link>
        <a href="https://www.swiggy.com/instamart?">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
        </a>
      </div>
    </header>
  )

}