import {React,useState,useEffect, useContext} from 'react'
import Carousel from './Carousel'
import BodyHeader from "./BodyHeader"
import BodyPart from "./BodyPart"
import { allRestaurant } from '../FetchData/RestaurantData'
import { FoodContext } from '../context/Provide'
import Filters from './Filters'

function Home() {
  const {coordinate,sorttype}=useContext(FoodContext)
  const [allRes, setallRes] = useState([])
  const [CarouselCard, setCarouselCard] = useState([])
  const [Filterdata, setFilterdata] = useState([])
  const [open, setopen] = useState(false)

  const fetchallRestaurant=async()=>{
    setallRes([])
    const ResData=await allRestaurant(coordinate,sorttype)
    setFilterdata(ResData.data.filters[0].options)
    if(sorttype=="RELEVANCE"){
      setallRes(ResData.data.cards[2].data.data.cards )
      setCarouselCard(ResData.data.cards[0].data.data.cards)
    }else{
      setallRes(ResData.data.cards[0].data.data.cards  )
    }
  }
  
  useEffect(() => {
    fetchallRestaurant()
  }, [coordinate,sorttype])
  
  return (
    <>
        <Carousel CaroCard={CarouselCard}/>
        <BodyHeader setopen={setopen}/>
        <BodyPart allRestaurant={allRes}/>
        <Filters open={open} setopen={setopen}Filterdata={Filterdata}/>
    </>
  )
}


export default Home