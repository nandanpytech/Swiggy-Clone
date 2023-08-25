
export const allRestaurantData=async(page,inputdata)=>{
    const Data=await fetch(`https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant?location=${inputdata}&page=${page}`)
    const Rescards=await Data.json()
    return Rescards
}

export const fetchoffsetdata=async(offset,sorttype,coordinate)=>{
    if(coordinate){
        const iniitaldata=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinate.lat}&lng=${coordinate.lon}&offset=${offset}&sortBy=${sorttype}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
        const data=await iniitaldata.json()
        return data
    }else{
        const iniitaldata=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2958104&lng=76.6393805&offset=${offset}&sortBy=${sorttype}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
        const data=await iniitaldata.json()
        return data
    }
}   