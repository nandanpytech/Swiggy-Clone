import {React,useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import ItemAccordion from './ItemAccordion'
import RestaurantDetails from './RestaurantDetails'
import { allRestaurant } from '../FetchData/RestaurantData'
import { FoodContext } from '../context/Provide'

function RestaurantMenu() {
  const [MenuItems, setMenuItems] = useState([])
  const [Allrestaurant, setAllrestaurant] = useState([])
  const {resid}=useParams()
  const {coordinate}=useContext(FoodContext)
 

  //Fetch Particular Restaurant Details
  const Particularrestaurantdetails=async(resid)=>{
    const data= await fetch(coordinate?
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${coordinate.lat}&lng=${coordinate.lon}&restaurantId=${resid}&submitAction=ENTER`:
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9762&lng=77.6033&restaurantId=${resid}&submitAction=ENTER`
      )
    const res= await data.json()
    setMenuItems(res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
  }

  //Fetch all Restaurant details
  const fetchRestaurantDetails=async()=>{
    const ResDetils=await allRestaurant(coordinate,"RELEVANCE")
    setAllrestaurant(ResDetils.data.cards[2].data.data.cards)
  }

  useEffect(()=> {
    Particularrestaurantdetails(resid)
    fetchRestaurantDetails()
  }, [])


 
  
  return (
    <div className="menu" style={{position:"relative"}}>
        <Breadcrumb/>
        <RestaurantDetails Allrestaurant={Allrestaurant}/>
        {
          MenuItems.map((e,index)=>{
            if(e.card.card.title){
              return <ItemAccordion  ItemCards={e?.card?.card?.itemCards || e?.card?.card?.categories} key={index} categorylength={e?.card?.card?.itemCards?.length} title={e.card?.card?.title}></ItemAccordion>
            }
           
          })
        }
    </div>
 
  )
}

export default RestaurantMenu