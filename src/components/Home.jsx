import {React,useState,useEffect, useContext} from 'react'
import Carousel from './Carousel'
import BodyHeader from "./BodyHeader"
import BodyPart from "./BodyPart"
import { allRestaurant, fetchoffsetdata } from '../FetchData/RestaurantData'
import { FoodContext } from '../context/Provide'
import Filters from './Filters'
import { useDispatch, useSelector } from 'react-redux'
import FiltersApplied from './FiltersApplied'
import { addRestaurant } from '../ReduxSlice/FilterSlice'

function Home() {
  const {coordinate,sorttype}=useContext(FoodContext)
  const [CarouselCard, setCarouselCard] = useState([])
  const [Filterdata, setFilterdata] = useState([])
  const [open, setopen] = useState(false)

 
  const dispatch=useDispatch()
  const offset=useSelector(store=>store.filter.GeneralData.OffSet)
  const allRes=useSelector(store=>store.filter.GeneralData.AllRestaurant)


  const fetchallRestaurant=async()=>{
    dispatch(addRestaurant([]))
    const ResData=await allRestaurant(coordinate,sorttype)
    setFilterdata(ResData.data.filters[0].options)
    if(sorttype=="RELEVANCE"){
      dispatch(addRestaurant(ResData.data.cards[2].data.data.cards))
      setCarouselCard(ResData.data.cards[0].data.data.cards)
    }else{
      dispatch(addRestaurant(ResData.data.cards[0].data.data.cards))
    }
  }

  const getoffesetResData=async()=>{
    const infinite_scroll_data=await fetchoffsetdata(offset,sorttype,coordinate)
    const real_data= infinite_scroll_data.data.cards
    const mergedata=[...allRes,...real_data]
    dispatch(addRestaurant(mergedata))
  }
 
  
  
  useEffect(() => {
    fetchallRestaurant()
  }, [coordinate,sorttype])

  
  
  return (
    <>
        <Carousel CaroCard={CarouselCard}/>
        <BodyHeader setopen={setopen} allRes={allRes} />
        <FiltersApplied/>
        <BodyPart allRestaurant={allRes} getoffesetResData={getoffesetResData}/>
        <Filters open={open} setopen={setopen} Filterdata={Filterdata}/>
    </>
  )
}


export default Home