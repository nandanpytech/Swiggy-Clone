import {React,useState,useEffect, useContext} from 'react'
import Carousel from './Carousel'
import BodyHeader from "./BodyHeader"
import BodyPart from "./BodyPart"
import { allRestaurantData } from '../FetchData/RestaurantData'
import { FoodContext } from '../context/Provide'
import { useDispatch, useSelector } from 'react-redux'
import FiltersApplied from './FiltersApplied'
import { addRestaurant } from '../ReduxSlice/FilterSlice'


function Home() {
  const {coordinate,inputdata,getlocation}=useContext(FoodContext)
  const [CarouselCard, setCarouselCard] = useState([])
  const [open, setopen] = useState(false)
  const [page,setPage]=useState(0)
  const [activeFilter, setActiveFilter] = useState('relevance');
  const [allRestaurant,setAllRestaurant]=useState([])
  const [filterRestaurant,setFilterRestaurant]=useState([])
  const [totalOpenRestaurant,setTotalOpenRestaurant]=useState(0)



  const fetchallRestaurant=async()=>{ 
    try{
      const ResData=await allRestaurantData(page,inputdata)
      if(page==0){
        setAllRestaurant(ResData?.data)
        setFilterRestaurant(ResData?.data)
        setTotalOpenRestaurant(ResData?.total)
      }else{
        setAllRestaurant(prev=>[...prev,...ResData?.data])
        setFilterRestaurant(prev=>[...prev,...ResData?.data])
      }
    }catch(err){
      console.log(err);
    } 
  }

  const getoffesetResData=async()=>{
    setPage(prev=>prev+1)
    fetchallRestaurant()

  }
 
  useEffect(() => {
    fetchallRestaurant()
  }, [page,coordinate])


  useEffect(()=>{
    fetch("https://swiggy-clone-wjqx.onrender.com/api/v1/restaurant/carousel")
    .then(res=>res.json())
    .then(data=>setCarouselCard(data.data.carousel))
  },[])

  const filterRestaurantWithActiveFilter = activeFilter => {
    switch (activeFilter) {
      case 'RELEVANCE':
        setFilterRestaurant(allRestaurant.slice());
        break;
      case 'DELIVERY_TIME':
        setFilterRestaurant(
          allRestaurant
            .slice()
            .sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime)
        );
        break;
      case 'RATING':
        setFilterRestaurant(
          allRestaurant
            .slice()
            .sort((a, b) => b.info.avgRating - a.info.avgRating)
        );
        break;
      case 'COST_FOR_TWO':
        setFilterRestaurant(
          allRestaurant
            .slice()
            .sort(
              (a, b) =>
                a.info.costForTwo.split(' ')[0].slice(1) -
                b.info.costForTwo.split(' ')[0].slice(1)
            )
        );
        break;
      case 'COST_FOR_TWO_H2L':
        setFilterRestaurant(
          allRestaurant
            .slice()
            .sort(
              (a, b) =>
                b.info.costForTwo.split(' ')[0].slice(1) -
                a.info.costForTwo.split(' ')[0].slice(1)
            )
        );
        break;
    }
  };

  
  return (
    <>
        <Carousel CaroCard={CarouselCard}/>
        <BodyHeader setopen={setopen} filterRestaurantWithActiveFilter={filterRestaurantWithActiveFilter} totalRescount={totalOpenRestaurant}  />
        <FiltersApplied/>
        <BodyPart totalRescount={totalOpenRestaurant} filterRestaurant={filterRestaurant}  getoffesetResData={getoffesetResData}/>
        {/* <Filters open={open} setopen={setopen} Filterdata={Filterdata.options}/> */}
    </>
  )
}


export default Home