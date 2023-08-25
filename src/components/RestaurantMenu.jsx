import {React,useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import ItemAccordion from './ItemAccordion'
import RestaurantDetails from './RestaurantDetails'
import { FoodContext } from '../context/Provide'
import { useSelector } from 'react-redux'
import ResShimmer from './ResShimmer'
import { getlocationdata } from '../FetchData/FetchRegionData'

function RestaurantMenu() {
  const [MenuItems, setMenuItems] = useState([])
  const {resid}=useParams()
  const {inputdata}=useContext(FoodContext)

  //Fetch Particular Restaurant Details
  const Particularrestaurantdetails=async(resid)=>{
    let coordinate= await getlocationdata(inputdata=='banglore'?"Bangalore":inputdata)

    const data=await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${coordinate?.coord?.lat}&lng=${coordinate?.coord?.lon}&restaurantId=${resid}`)
    const res= await data.json()
    console.log(res);
    setMenuItems(res.data.cards)
  }

  console.log(MenuItems);

  useEffect(()=> {
    Particularrestaurantdetails(resid)
  }, [resid])


  return (
    <div className="menu" style={{position:"relative"}}>
        <Breadcrumb RestaurantDetail={MenuItems[0]?.card.card.info}/>
        <RestaurantDetails RestaurantDetail={MenuItems[0]?.card.card.info}/>
        {
          MenuItems[2]?.groupedCard.cardGroupMap.REGULAR.cards.length==0?<ResShimmer/>:
          MenuItems[2]?.groupedCard.cardGroupMap.REGULAR.cards.map((e,index)=>{
            if(e.card.card.title){
              return <ItemAccordion  ItemCards={e?.card?.card?.itemCards || e?.card?.card?.categories} key={index} categorylength={e?.card?.card?.itemCards?.length} title={e.card?.card?.title}></ItemAccordion>
            }
          })
        }
    </div>
 
  )
}

export default RestaurantMenu