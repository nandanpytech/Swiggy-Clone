
export const allRestaurant=async(coordinate,sorttype)=>{
    if(coordinate){
    const Data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinate.lat}&lng=${coordinate.lon}&sortBy=${sorttype}&page_type=DESKTOP_WEB_LISTING`)
    const Rescards=await Data.json()
    return Rescards
    }
    const Data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9762&lng=77.6033&sortBy=${sorttype}&page_type=DESKTOP_WEB_LISTING`)
    const Rescards=await Data.json()
    return Rescards
}
