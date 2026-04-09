export default function DineCard({Dinedata}){

  return(

    <div className="max-w-sm flex-none">

      <a target="_blank" href={Dinedata?.cta.link}>
        <div className="relative">
          <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Dinedata?.info?.mediaFiles[0]?.url} alt="" />
          <p className="absolute bottom-3 left-4 text-xl font-bold text-white"> {Dinedata?.info?.name.length > 20 ? Dinedata?.info?.name.slice(0, 20) + '...' : Dinedata?.info?.name}</p>
          <p className="absolute bottom-3 right-4 text-xl font-bold text-white">{Dinedata?.info?.rating?.value}</p>
          <div className="absolute bg-linear-to-t from-black to-transparent h-7 bottom-0 left-0 right-0"></div>
        </div>
      </a>

    </div>
  )
}