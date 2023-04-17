import {React,useState,useEffect, useContext} from 'react'
import Carousel from './Carousel'
import BodyHeader from "./BodyHeader"
import BodyPart from "./BodyPart"
import { allRestaurant } from '../FetchData/RestaurantData'
import { FoodContext } from '../context/Provide'

function Home() {
  const {coordinate,sorttype}=useContext(FoodContext)
  const [allRes, setallRes] = useState([])
  const [CarouselCard, setCarouselCard] = useState([])

  const fetchallRestaurant=async()=>{
    const ResData=await allRestaurant(coordinate,sorttype)
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
        <BodyHeader/>
        <BodyPart allRestaurant={allRes}/>
    </>
  )
}


export default Home