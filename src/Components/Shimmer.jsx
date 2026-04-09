function ShimmerCard() {
  return (
    <div className="w-70 mb-2">
      <div className="w-70 h-40 rounded-xl bg-gray-200 animate-pulse"></div>
      <div className="w-[95%] mx-auto mt-3 space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
}
 
export default function Shimmer() {
  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-10 gap-5">
      {Array(12).fill(0).map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  )
}